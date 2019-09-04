import {SceneService} from "../service/SceneService";
import {EarthService} from "../service/EarthService";
import {ParrkService} from "../service/ParkService";

//初始化自定义场景
let sceneService = new SceneService();
sceneService.initScene();

//load地球
let earthService = new EarthService(sceneService);
earthService.loadEarth(5, function (group) {
    //地球是有一点向右倾斜
    group.rotation.set(-Math.PI / 8, -Math.PI / 1.63, 0);

    //事件监听
    sceneService.addEventListener(group, "dblclick", function () {
        console.log("地球被鼠标双击");
        earthService.dblclickEarth(function () {
            console.log("加载园区...");
            new ParrkService(sceneService).loadParrk();
        });
    });
});

//把对象放到window，方便在浏览器调试
window["sceneService"] = sceneService;
window["earthService"] = earthService;