import * as THREE from 'three';
import {FBXLoader} from "three/examples/jsm/loaders/FBXLoader";
import {TGALoader} from "three/examples/jsm/loaders/TGALoader";
import {DDSLoader} from "three/examples/jsm/loaders/DDSLoader";
import {SceneService} from "../SceneService";

/**
 * 自定义FBXLoader类，对loadFBX对象进行部分封装
 */
export class FBXLoaderService {
    private sceneService?: SceneService;

    //构造参数，默认已经创建空构造
    constructor(sceneService?: SceneService) {
        this.sceneService = sceneService;
    }

    public loadFbx(url ?: string, onLoad ?: (object: THREE.Object3D) => void): void {
        let thid = this;
        //载入某些不常用格式的纹理材质
        // @ts-ignore
        THREE.Loader.Handlers.add(/\.tga$/i, new TGALoader());
        // @ts-ignore
        THREE.Loader.Handlers.add( /\.dds$/i, new DDSLoader() );
        new FBXLoader().load(url + ".fbx", function (object) {
            //执行回调
            if (onLoad) onLoad(object);

            //默认添加、渲染
            thid.sceneService.scene.add(object);
        });
    }
}