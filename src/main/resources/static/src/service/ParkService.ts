import {SceneService} from "./SceneService";
import {CodeLoaderService} from "./loader/CodeLoaderService";
import {CommonUtil} from "../util/CommonUtil";
import * as THREE from "three";
import {CSS2DObject} from "three/examples/jsm/renderers/CSS2DRenderer";
import * as $ from "jquery";
import {CSS3DObject} from "three/examples/jsm/renderers/CSS3DRenderer";
import {OBJLoaderService} from "./loader/OBJLoaderService";
import {FBXLoaderService} from "./loader/FBXLoaderService";


/**
 *园区场景对象
 */
export class ParrkService {
    private sceneService?: SceneService;

    //构造参数，默认已经创建空构造
    constructor(sceneService?: SceneService) {
        this.sceneService = sceneService;
    }

    /**
     * 更新场景、镜头、控制器等
     */
    private updateScene(): void {
        /* 天空盒子图片 */
        let path = "/images/skybox/";       //设置路径
        let format = '.jpg';        //设定格式
        let urls = [
            path + 'px' + format, path + 'nx' + format,
            path + 'py' + format, path + 'ny' + format,
            path + 'pz' + format, path + 'nz' + format
        ];
        this.sceneService.scene.background = new THREE.CubeTextureLoader().load(urls);

        //更新镜头
        this.sceneService.camera.position.set(500, 500, 500);
        this.sceneService.camera.lookAt(new THREE.Vector3(0, 0, 0));

        //更新控制器
        this.sceneService.controls.target = new THREE.Vector3(0, 0, 0);
        this.sceneService.controls.enableZoom = true;//启用摄像机的缩放。
        this.sceneService.controls.enableRotate = true;//启用摄像机水平或垂直旋转
        this.sceneService.controls.enablePan = true;//启用摄像机平移
        this.sceneService.controls.enableKeys = true;//启用键盘控制
        this.sceneService.controls.keyPanSpeed = 7;//当使用键盘按键的时候，相机平移的速度有多快。默认值为每次按下按键时平移7像素。
        this.sceneService.controls.maxPolarAngle = Math.PI * 0.5;//限制上下可视角度
        this.sceneService.controls.minDistance = 100;//最小缩放
        this.sceneService.controls.maxDistance = 5000;//最大缩放
    }

    /**
     * 加载园区
     */
    public loadParrk(): void {
        //更新场景镜头
        this.updateScene();

        let thid = this;

        //地板
        let groundTexture = new THREE.TextureLoader().load("/images/minecraft/grasslight-big.jpg");
        groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
        groundTexture.repeat.set(25, 25);
        groundTexture.anisotropy = 16;
        let groundMaterial = new THREE.MeshLambertMaterial({map: groundTexture});
        let mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(20000, 20000), groundMaterial);
        //旋转九十度
        mesh.rotation.x = -Math.PI / 2;
        //是否接受阴影
        mesh.receiveShadow = true;
        //添加、渲染
        thid.sceneService.scene.add(mesh);

        //load一个立方体对象
        let codeLoaderService = new CodeLoaderService(thid.sceneService);
        codeLoaderService.loadCode(70, 70, 70, function (mesh) {
            //位置
            mesh.position.set(-100, 100, 0);
            //是否投射阴影
            mesh.castShadow = true;
            mesh.receiveShadow = true;

            //事件监听
            thid.sceneService.addEventListener(mesh, "click", function (object) {
                console.log("立方体对象被鼠标点击");

                //新、旧坐标，且LookAt不相同才播放动画
                let oldLookAt = thid.sceneService.controls.target;
                let newLookAt = object.position;
                if (!CommonUtil.objIsEqual(oldLookAt, newLookAt)) {
                    thid.sceneService.myAnimate(2, function (value) {
                        //计算LookAt
                        let lookAt_x = oldLookAt.x + (newLookAt.x - oldLookAt.x) * value;
                        let lookAt_y = oldLookAt.y + (newLookAt.y - oldLookAt.y) * value;
                        let lookAt_z = oldLookAt.z + (newLookAt.z - oldLookAt.z) * value;
                        let vector3 = new THREE.Vector3(lookAt_x, lookAt_y, lookAt_z);
                        //镜头看的位置坐标
                        thid.sceneService.camera.lookAt(vector3);

                        //控制器的中心点
                        thid.sceneService.controls.target = vector3;
                    }, function () {
                        let oldPosition = thid.sceneService.camera.position;
                        let newPosition = object.position;
                        thid.sceneService.myAnimate(2, function (value) {
                            //计算Position
                            let cameraBackDist_x = 800;
                            let cameraBackDist_y = 300;
                            let cameraBackDist_z = 800;

                            let position_x = oldPosition.x + (newPosition.x + cameraBackDist_x - oldPosition.x) * value;
                            let position_y = oldPosition.y + (newPosition.y + cameraBackDist_y - oldPosition.y) * value;
                            let position_z = oldPosition.z + (newPosition.z + cameraBackDist_z - oldPosition.z) * value;
                            thid.sceneService.camera.position.set(position_x, position_y, position_z);
                            thid.sceneService.controls.update();
                        }, function () {
                            console.log("动画播放完毕");
                            //添加一个标签，类似公告牌
                            let html = "<div class=\"element\">" +
                                "<div class=\"number\">编号：001</div>" +
                                "<div class=\"symbol\">立方体</div>" +
                                "<div class=\"details\">普通的立方体，2D的label</div>" +
                                "</div>";

                            //2D
                            let cSS2DObject = new CSS2DObject($(html)[0]);
                            cSS2DObject.name = "2dLabel";
                            //高度 = 自身高度 / 2 + 父对象高度的 / 2
                            cSS2DObject.position.y = 120 / 2 + 70 / 2;
                            object.remove(object.getObjectByName("2dLabel"));
                            object.add(cSS2DObject);
                        });
                    });
                }
            });

        });
        codeLoaderService.loadCode(70, 70, 70, function (mesh) {
            //位置
            mesh.position.set(100, 100, 0);
            //是否投射阴影
            mesh.castShadow = true;
            mesh.receiveShadow = true;

            //事件监听
            thid.sceneService.addEventListener(mesh, "click", function (object) {
                console.log("立方体对象被鼠标点击");

                //新、旧坐标，且LookAt不相同才播放动画
                let oldLookAt = thid.sceneService.controls.target;
                let newLookAt = object.position;
                if (!CommonUtil.objIsEqual(oldLookAt, newLookAt)) {
                    thid.sceneService.myAnimate(2, function (value) {
                        //计算LookAt
                        let lookAt_x = oldLookAt.x + (newLookAt.x - oldLookAt.x) * value;
                        let lookAt_y = oldLookAt.y + (newLookAt.y - oldLookAt.y) * value;
                        let lookAt_z = oldLookAt.z + (newLookAt.z - oldLookAt.z) * value;
                        let vector3 = new THREE.Vector3(lookAt_x, lookAt_y, lookAt_z);
                        //镜头看的位置坐标
                        thid.sceneService.camera.lookAt(vector3);

                        //控制器的中心点
                        thid.sceneService.controls.target = vector3;
                    }, function () {
                        let oldPosition = thid.sceneService.camera.position;
                        let newPosition = object.position;
                        thid.sceneService.myAnimate(2, function (value) {
                            //计算Position
                            let cameraBackDist_x = 800;
                            let cameraBackDist_y = 300;
                            let cameraBackDist_z = 800;

                            let position_x = oldPosition.x + (newPosition.x + cameraBackDist_x - oldPosition.x) * value;
                            let position_y = oldPosition.y + (newPosition.y + cameraBackDist_y - oldPosition.y) * value;
                            let position_z = oldPosition.z + (newPosition.z + cameraBackDist_z - oldPosition.z) * value;
                            thid.sceneService.camera.position.set(position_x, position_y, position_z);
                            thid.sceneService.controls.update();
                        }, function () {
                            console.log("动画播放完毕");
                            //添加一个标签，类似公告牌
                            let html = "<div class=\"element\">" +
                                "<div class=\"number\">编号：002</div>" +
                                "<div class=\"symbol\">立方体</div>" +
                                "<div class=\"details\">普通的立方体，3D的label</div>" +
                                "</div>";

                            //3D
                            let cSS3DObject = new CSS3DObject($(html)[0]);
                            cSS3DObject.name = "3dLabel";
                            //高度 = 自身高度 / 2 + 父对象高度的 / 2
                            cSS3DObject.position.y = 120 / 2 + 70 / 2;
                            object.remove(object.getObjectByName("3dLabel"));
                            object.add(cSS3DObject);
                        });
                    });
                }
            });

        });

        //load一个OBJ对象
        let objLoaderService = new OBJLoaderService(thid.sceneService);
        objLoaderService.loadObj("/models/obj/male02/male02", function (object) {
            //位置
            object.position.set(300, 0, 0);
            //是否投射阴影
            object.castShadow = true;
            object.receiveShadow = true;

            //事件监听
            thid.sceneService.addEventListener(object, "click", function (object) {
                console.log("男人被鼠标点击");

                //新、旧坐标，且LookAt不相同才播放动画
                let oldLookAt = thid.sceneService.controls.target;
                let newLookAt = object.position;
                if (!CommonUtil.objIsEqual(oldLookAt, newLookAt)) {
                    thid.sceneService.myAnimate(2, function (value) {
                        //计算LookAt
                        let lookAt_x = oldLookAt.x + (newLookAt.x - oldLookAt.x) * value;
                        let lookAt_y = oldLookAt.y + (newLookAt.y - oldLookAt.y) * value;
                        let lookAt_z = oldLookAt.z + (newLookAt.z - oldLookAt.z) * value;
                        let vector3 = new THREE.Vector3(lookAt_x, lookAt_y, lookAt_z);
                        //镜头看的位置坐标
                        thid.sceneService.camera.lookAt(vector3);

                        //控制器的中心点
                        thid.sceneService.controls.target = vector3;
                    }, function () {
                        let oldPosition = thid.sceneService.camera.position;
                        let newPosition = object.position;
                        thid.sceneService.myAnimate(2, function (value) {
                            //计算Position
                            let cameraBackDist_x = 800;
                            let cameraBackDist_y = 300;
                            let cameraBackDist_z = 800;

                            let position_x = oldPosition.x + (newPosition.x + cameraBackDist_x - oldPosition.x) * value;
                            let position_y = oldPosition.y + (newPosition.y + cameraBackDist_y - oldPosition.y) * value;
                            let position_z = oldPosition.z + (newPosition.z + cameraBackDist_z - oldPosition.z) * value;
                            thid.sceneService.camera.position.set(position_x, position_y, position_z);
                            thid.sceneService.controls.update();
                        }, function () {
                            console.log("动画播放完毕");
                            //添加一个标签，类似公告牌
                            let html = "<div class=\"element\">" +
                                "<div class=\"number\">编号：001</div>" +
                                "<div class=\"symbol\">男人</div>" +
                                "<div class=\"details\">站立的男人，3D的label</div>" +
                                "</div>";

                            //3D
                            let cSS3DObject = new CSS3DObject($(html)[0]);
                            cSS3DObject.name = "3dLabel";
                            //高度 = 自身高度 / 2 + 父对象高度的 / 2
                            cSS3DObject.position.y = 120 / 2 + 70 / 2;
                            object.remove(object.getObjectByName("3dLabel"));
                            object.add(cSS3DObject);
                        });
                    });
                }
            });
        });

        //load一个FBX对象
        let fbxLoaderService = new FBXLoaderService(thid.sceneService);
        fbxLoaderService.loadFbx("/models/fbx/samba_dancing/Samba Dancing", function (object) {
            //位置
            object.position.set(-300, 0, 0);

            //添加骨骼辅助
            thid.sceneService.scene.add(new THREE.SkeletonHelper(object));

            //设置模型的每个部位都可以投影
            object.traverse(function (child) {
                child.castShadow = true;
                child.receiveShadow = true;
            });

            //创建一个动画管理，播放对象自带的动画
            let clock = new THREE.Clock();
            let mixer = new THREE.AnimationMixer(object);
            // @ts-ignore
            let action = mixer.clipAction(object.animations[0]);
            action.play();

            //不停的更新
            animate();

            function animate() {
                mixer.update(clock.getDelta());
                requestAnimationFrame(animate);
            }

            //事件监听
            thid.sceneService.addEventListener(object, "click", function (object) {
                console.log("女人被鼠标点击");

                //新、旧坐标，且LookAt不相同才播放动画
                let oldLookAt = thid.sceneService.controls.target;
                let newLookAt = object.position;
                if (!CommonUtil.objIsEqual(oldLookAt, newLookAt)) {
                    thid.sceneService.myAnimate(2, function (value) {
                        //计算LookAt
                        let lookAt_x = oldLookAt.x + (newLookAt.x - oldLookAt.x) * value;
                        let lookAt_y = oldLookAt.y + (newLookAt.y - oldLookAt.y) * value;
                        let lookAt_z = oldLookAt.z + (newLookAt.z - oldLookAt.z) * value;
                        let vector3 = new THREE.Vector3(lookAt_x, lookAt_y, lookAt_z);
                        //镜头看的位置坐标
                        thid.sceneService.camera.lookAt(vector3);

                        //控制器的中心点
                        thid.sceneService.controls.target = vector3;
                    }, function () {
                        let oldPosition = thid.sceneService.camera.position;
                        let newPosition = object.position;
                        thid.sceneService.myAnimate(2, function (value) {
                            //计算Position
                            let cameraBackDist_x = 800;
                            let cameraBackDist_y = 300;
                            let cameraBackDist_z = 800;

                            let position_x = oldPosition.x + (newPosition.x + cameraBackDist_x - oldPosition.x) * value;
                            let position_y = oldPosition.y + (newPosition.y + cameraBackDist_y - oldPosition.y) * value;
                            let position_z = oldPosition.z + (newPosition.z + cameraBackDist_z - oldPosition.z) * value;
                            thid.sceneService.camera.position.set(position_x, position_y, position_z);
                            thid.sceneService.controls.update();
                        }, function () {
                            console.log("动画播放完毕");
                            //添加一个标签，类似公告牌
                            let html = "<div class=\"element\">" +
                                "<div class=\"number\">编号：001</div>" +
                                "<div class=\"symbol\">女人</div>" +
                                "<div class=\"details\">跳舞的女人，3D的label</div>" +
                                "</div>";

                            //3D
                            let cSS3DObject = new CSS3DObject($(html)[0]);
                            cSS3DObject.name = "3dLabel";
                            //高度 = 自身高度 / 2 + 父对象高度的 / 2
                            cSS3DObject.position.y = 120 / 2 + 70 / 2;
                            object.remove(object.getObjectByName("3dLabel"));
                            object.add(cSS3DObject);
                        });
                    });
                }
            });
        });
    }
}