import * as THREE from "three";
import {SceneService} from "./SceneService";
import {Color, Group} from "three";

/**
 * 地球场景
 */
export class EarthService {
    private sceneService?: SceneService;
    private earth?: THREE.Mesh;
    private cloud?: THREE.Mesh;
    private cloud2?: THREE.Mesh;
    public group?: THREE.Group;
    public requestAnimationFrameFlag?: number;
    private earthRotatesSteadilyCameraPosition?: THREE.Vector3;//地球稳定自转镜头位置

    //构造参数，默认已经创建空构造
    constructor(sceneService?: SceneService) {
        this.sceneService = sceneService;
    }

    /**
     * 更新场景、镜头、控制器等
     */
    private updateScene(): void {
        //地球星空背景
        // this.sceneService.scene.background = new THREE.TextureLoader().load('/images/earth/bg.jpg');
        //更新镜头
        this.sceneService.camera.position.set(80, 0, 0);
        let vector3 = new THREE.Vector3(0, 0, 0);
        this.sceneService.camera.lookAt(vector3);

        //更新控制器
        this.sceneService.controls.target = vector3;
        this.sceneService.controls.enableZoom = true;//启用摄像机的缩放。
        this.sceneService.controls.enableRotate = true;//启用摄像机水平或垂直旋转
        this.sceneService.controls.enablePan = false;//禁用摄像机平移
        this.sceneService.controls.enableKeys = false;//禁用键盘控制
        this.sceneService.controls.maxPolarAngle = Math.PI;//限制上下可视角度
        this.sceneService.controls.minDistance = 10;//最小缩放
        this.sceneService.controls.maxDistance = 80;//最大缩放

        //地球稳定自转镜头位置
        this.earthRotatesSteadilyCameraPosition = new THREE.Vector3(40,0,0);
    }

    /**
     * 加载地球
     */
    public loadEarth(radius ?: number, onLoad ?: (object: THREE.Group) => void): void {
        //更新场景镜头
        this.updateScene();

        /* 地球 */
        let sphere = new THREE.SphereGeometry(radius, 40, 40);
        let material = new THREE.MeshPhongMaterial();
        material.transparent = true;
        material.map = new THREE.TextureLoader().load('/images/earth/earth4.jpg');
        material.bumpMap = new THREE.TextureLoader().load('/images/earth/earth_bump.jpg');
        material.bumpScale = 0.15;
        material.specularMap = new THREE.TextureLoader().load('/images/earth/earth_spec.jpg');
        material.specular = new THREE.Color('#909090');
        material.shininess = 5;
        let earth = new THREE.Mesh(sphere, material);
        earth.name = 'earth';

        /* 云 */
        let cloudSphere = new THREE.SphereGeometry(radius + 0.1, 40, 40);
        let cloudMaterial = new THREE.MeshPhongMaterial();
        cloudMaterial.map = new THREE.TextureLoader().load('/images/earth/earth_cloud.png');
        cloudMaterial.transparent = true;
        cloudMaterial.opacity = 1;
        cloudMaterial.blending = THREE.AdditiveBlending;
        let cloudMesh = new THREE.Mesh(cloudSphere, cloudMaterial);
        cloudMesh.name = "earth_cloud1";

        let cloudSphere2 = new THREE.SphereGeometry(radius + 0.2, 40, 40);
        let cloudMaterial2 = new THREE.MeshPhongMaterial();
        cloudMaterial2.map = new THREE.TextureLoader().load('/images/earth/earth_cloud.png');
        cloudMaterial2.transparent = true;
        cloudMaterial2.opacity = 1;
        cloudMaterial2.blending = THREE.AdditiveBlending;
        let cloudMesh2 = new THREE.Mesh(cloudSphere2, cloudMaterial2);
        cloudMesh2.name = "earth_cloud2";
        cloudMesh2.rotation.y = Math.PI;

        /* 光辉 */
        let glowSphere = new THREE.SphereGeometry(radius, 40, 40);
        let glowMaterial = new THREE.ShaderMaterial({
            uniforms: {
                'c': {type: 'f', value: 0.34},
                'p': {type: 'f', value: 9.17}
            },
            vertexShader: ['varying vec3 vNormal;', 'void main() {', 'vNormal = normalize( normalMatrix * normal );', 'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', '}'].join('\n'),
            fragmentShader: ['uniform float c;', 'uniform float p;', 'varying vec3 vNormal;', 'void main() {', 'float intensity = pow( c - dot( vNormal, vec3( 0.0, 0.0, 1.0 ) ), p );', 'gl_FragColor = vec4( 0.2, 0.58, 0.9, 0.3 ) * intensity;', '}'].join('\n')
        });
        glowMaterial.side = THREE.BackSide;
        glowMaterial.transparent = false;
        let glowMesh = new THREE.Mesh(glowSphere, glowMaterial);
        glowMesh.scale.x = glowMesh.scale.y = glowMesh.scale.z = 1.3;
        glowMesh.name = 'glow';

        let blackSphere = new THREE.SphereGeometry(radius, 40, 40);
        let blackMaterial = new THREE.MeshBasicMaterial({color: 0x000000});
        blackMaterial.transparent = false;
        let blackMesh = new THREE.Mesh(blackSphere, blackMaterial);
        blackMesh.name = 'black';

        /* 打点 */
        let pointsGeometry = new THREE.Geometry();
        pointsGeometry.vertices.push(
            new THREE.Vector3(-(radius / 1.5) + 1.2, (radius / 1.5) - 0.8, -(radius / 1.5) - 1),
        );
        pointsGeometry.computeBoundingSphere();
        let pointsMaterial = new THREE.PointsMaterial();
        pointsMaterial.map = new THREE.TextureLoader().load('/images/earth/i_mariana.png');
        pointsMaterial.map.minFilter = THREE.LinearFilter;
        pointsMaterial.size = 4;
        pointsMaterial.transparent = true;
        let points = new THREE.Points(pointsGeometry, pointsMaterial);
        points.name = "气压站";

        /* 最终组合体 */
        this.earth = earth;
        this.cloud = cloudMesh;
        this.cloud2 = cloudMesh2;
        let group = new THREE.Group();
        //打点的父类设置成地球
        earth.add(points);

        group.add(earth);
        group.add(cloudMesh);
        group.add(cloudMesh2);
        // group.add(glowMesh);
        // group.add(blackMesh);

        //执行回调
        this.group = group;
        if (onLoad) onLoad(group);

        this.sceneService.scene.add(group);

        //初始化缩放，然后开始自转
        this.initAnimate();
    }

    /**
     * 初始化地球动画，x轴到减到40
     */
    public initAnimate(): void {
        let thid = this;

        //推进镜头
        thid.sceneService.cameraInspect(-0.5, new THREE.Vector3(thid.earthRotatesSteadilyCameraPosition.x, thid.earthRotatesSteadilyCameraPosition.y, thid.earthRotatesSteadilyCameraPosition.z), function () {
            thid.autoRotationAnimatePlay();
        });
    }

    /**
     * 地球、云层的自转，同时镜头坐标会慢慢恢复到this.earthRotatesSteadilyCameraPosition
     */
    public autoRotationAnimatePlay(): void {
        //动画效果
        this.earth.rotation.y += 0.001;
        this.cloud.rotation.y += 0.0005;
        this.cloud2.rotation.y += 0.0005;

        let number = 0.007;
        if (Number(this.sceneService.camera.position.x.toFixed(3)) !== this.earthRotatesSteadilyCameraPosition.x) {
            if (this.sceneService.camera.position.x < this.earthRotatesSteadilyCameraPosition.x) {
                this.sceneService.camera.position.x += number;
            }
            if (this.sceneService.camera.position.x > this.earthRotatesSteadilyCameraPosition.x) {
                this.sceneService.camera.position.x -= number;
            }
        }

        if (Number(this.sceneService.camera.position.y.toFixed(3)) !== this.earthRotatesSteadilyCameraPosition.y) {
            if (this.sceneService.camera.position.y < this.earthRotatesSteadilyCameraPosition.y) {
                this.sceneService.camera.position.y += number;
            }
            if (this.sceneService.camera.position.y > this.earthRotatesSteadilyCameraPosition.y) {
                this.sceneService.camera.position.y -= number;
            }
        }

        if (Number(this.sceneService.camera.position.z.toFixed(3)) !== this.earthRotatesSteadilyCameraPosition.z) {
            if (this.sceneService.camera.position.z < this.earthRotatesSteadilyCameraPosition.z) {
                this.sceneService.camera.position.z += number;
            }
            if (this.sceneService.camera.position.z > this.earthRotatesSteadilyCameraPosition.z) {
                this.sceneService.camera.position.z -= number;
            }
        }

        //动画循环
        let thid = this;
        this.requestAnimationFrameFlag = requestAnimationFrame(function () {
            thid.autoRotationAnimatePlay();
        });
    }

    /**
     * 双击地球
     */
    public dblclickEarth(callback ?: () => void): void {
        let thid = this;
        //禁止鼠标、键盘控制镜头
        thid.sceneService.controls.enableZoom = false;//启用摄像机的缩放。
        thid.sceneService.controls.enableRotate = false;//启用摄像机水平或垂直旋转
        thid.sceneService.controls.enablePan = false;//禁用摄像机平移
        thid.sceneService.controls.enableKeys = false;//禁用键盘控制

        //停止自转
        cancelAnimationFrame(thid.requestAnimationFrameFlag);

        //先摆正地球
        let oldPosition = thid.sceneService.camera.position;
        let newPosition = {x: 40, y: 0, z: 0};
        //判断earth就可以了，不需要旋转整体
        let oldRotation = thid.earth.rotation;
        let newRotation = {x: 0, y: 0, z: 0};
        thid.sceneService.myAnimate(1, function (value) {
            //计算Position
            let position_x = oldPosition.x + (newPosition.x - oldPosition.x) * value;
            let position_y = oldPosition.y + (newPosition.y - oldPosition.y) * value;
            let position_z = oldPosition.z + (newPosition.z - oldPosition.z) * value;
            thid.sceneService.camera.position.set(position_x, position_y, position_z);

            //计算 rotation
            let rotation_x = oldRotation.x + (newRotation.x - oldRotation.x) * value;
            let rotation_y = oldRotation.y + (newRotation.y - oldRotation.y) * value;
            let rotation_z = oldRotation.z + (newRotation.z - oldRotation.z) * value;
            thid.earth.rotation.set(rotation_x, rotation_y, rotation_z);
        }, function () {
            //再推进镜头
            let oldPosition = thid.sceneService.camera.position;
            thid.sceneService.cameraInspect(-0.5, new THREE.Vector3(10, oldPosition.y, oldPosition.z), function () {
                //删除地球
                // 递归遍历组对象group释放所有后代网格模型绑定几何体占用内存
                thid.group.traverse(function (obj) {
                    if (obj.type === 'Mesh') {
                        obj["geometry"].dispose();
                        obj["material"].dispose();
                    }
                });
                // 删除场景对象scene的子对象group
                thid.sceneService.scene.remove(thid.group);

                //云层过渡
                thid.kfCloudAnimate(callback);
            });
        });
    }

    /**
     * 生成云海、穿越动画
     */
    private kfCloudAnimate(callback ?: () => void): void {
        let thid = this;

        //更新场景、镜头、控制器等
        let vector3 = new THREE.Vector3(-5000, -4000, 0);
        thid.sceneService.camera.lookAt(vector3);
        thid.sceneService.controls.target = vector3;
        thid.sceneService.controls.minDistance = 0;//最小缩放
        thid.sceneService.controls.maxDistance = 8000;//最大缩放
        thid.sceneService.scene.background = new Color("#326696");

        let geometry = new THREE.PlaneGeometry(50, 45, 32, 32);
        let texture = new THREE.TextureLoader().load('/images/earth/cloud.png');
        texture.magFilter = THREE.LinearMipMapLinearFilter;
        texture.minFilter = THREE.LinearMipMapLinearFilter;

        let material = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            opacity: 1
        });

        //生成云海
        let kfCloudGroup = new Group();
        for (let i = 0; i < 8000; i++) {
            let plane = new THREE.Mesh(geometry, material);
            plane.position.y = -Math.random() * 800;
            plane.position.x = -Math.random() * 800;
            plane.position.z = i % 2 === 0 ? Math.random() * 500 : -Math.random() * 500;

            plane.rotation.y = Math.PI / 2;
            plane.scale.z = plane.scale.y = Math.random() * Math.random() * 1.5 + 0.5;
            kfCloudGroup.add(plane);
        }
        thid.sceneService.scene.add(kfCloudGroup);
        window["kfCloudGroup"] = kfCloudGroup;

        //再推进镜头
        thid.sceneService.cameraInspect(-15, new THREE.Vector3(-550, -550, 0), function () {
            //删除云海
            // 递归遍历组对象group释放所有后代网格模型绑定几何体占用内存
            kfCloudGroup.traverse(function (obj) {
                if (obj.type === 'Mesh') {
                    obj["geometry"].dispose();
                    obj["material"].dispose();
                }
            });
            // 删除场景对象scene的子对象group
            thid.sceneService.scene.remove(kfCloudGroup);

            //移除地球dblclick事件监听
            thid.sceneService.removeEventListener(thid.group,"dblclick");

            if (callback) callback();
        });
    }
}