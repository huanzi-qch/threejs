import * as THREE from 'three';
import {SceneService} from "../SceneService";

/**
 * 自定义FBXLoader类，对loadFBX对象进行部分封装
 */
export class CodeLoaderService {
    private sceneService?: SceneService;

    //构造参数，默认已经创建空构造
    constructor(sceneService?: SceneService) {
        this.sceneService = sceneService;
    }

    //加载一个立方体
    public loadCode(width?: number, height?: number, depth ?: number, onLoad ?: (mesh: THREE.Mesh) => void): void {
        //创建一个立方体
        let geometry = new THREE.BoxGeometry(width, height, depth);
        geometry[width] = width;
        geometry[height] = height;
        geometry[depth] = depth;

        //材质
        let material = new THREE.MeshPhongMaterial();
        // material.color = 0xfff000;
        // material.map = THREE.ImageUtils.loadTexture('/images/minecraft/grass.png');

        //网格，包含有一个几何体以及应用在在此几何体上的材质的对象
        let mesh = new THREE.Mesh(geometry, material);

        //执行回调
        if(onLoad) onLoad(mesh);

        //默认添加、渲染
        this.sceneService.scene.add(mesh);

        //播放动画
        this.animate(mesh);
    }

    /**
     * 立方体的动画效果
     */
    private animate(mesh?: THREE.Mesh): void {
        //动画效果
        mesh.rotation.y += 0.02;

        //动画循环
        let thid = this;
        requestAnimationFrame(function () {
            thid.animate(mesh)
        });
    }
}