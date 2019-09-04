/**
 * 自定义OBJLoader类，对loadOBJ对象进行部分封装
 */
import * as THREE from 'three';
import {MTLLoader} from "three/examples/jsm/loaders/MTLLoader";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {TGALoader} from "three/examples/jsm/loaders/TGALoader";
import {DDSLoader} from "three/examples/jsm/loaders/DDSLoader";
import {SceneService} from "../SceneService";


export class OBJLoaderService {
    private sceneService?: SceneService;

    //构造参数，默认已经创建空构造
    constructor(sceneService?: SceneService) {
        this.sceneService = sceneService;
    }

    public loadObj(url?: string, onLoad ?: (object: THREE.Object3D) => void): void {
        let thid = this;
        //载入某些不常用格式的纹理材质
        // @ts-ignore
        THREE.Loader.Handlers.add(/\.tga$/i, new TGALoader());
        // @ts-ignore
        THREE.Loader.Handlers.add( /\.dds$/i, new DDSLoader() );
        //先加载mtl材质文件
        new MTLLoader().load(url + '.mtl', function (materials) {
            //预加载
            materials.preload();
            //加载obj文件
            let objLoader = new OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.load(url + '.obj', function (object) {
                //执行回调
                if (onLoad) onLoad(object);

                //默认添加、渲染
                thid.sceneService.scene.add(object);
            });
        });
    }
}