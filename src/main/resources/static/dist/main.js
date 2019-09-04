/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/controller/Main.ts","vendors-main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controller/Main.ts":
/*!********************************!*\
  !*** ./src/controller/Main.ts ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _service_SceneService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/SceneService */ "./src/service/SceneService.ts");
/* harmony import */ var _service_EarthService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/EarthService */ "./src/service/EarthService.ts");
/* harmony import */ var _service_ParkService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/ParkService */ "./src/service/ParkService.ts");



let sceneService = new _service_SceneService__WEBPACK_IMPORTED_MODULE_0__["SceneService"]();
sceneService.initScene();
let earthService = new _service_EarthService__WEBPACK_IMPORTED_MODULE_1__["EarthService"](sceneService);
earthService.loadEarth(5, function (group) {
    group.rotation.set(-Math.PI / 8, -Math.PI / 1.63, 0);
    sceneService.addEventListener(group, "dblclick", function () {
        console.log("地球被鼠标双击");
        earthService.dblclickEarth(function () {
            console.log("加载园区...");
            new _service_ParkService__WEBPACK_IMPORTED_MODULE_2__["ParrkService"](sceneService).loadParrk();
        });
    });
});
window["sceneService"] = sceneService;
window["earthService"] = earthService;


/***/ }),

/***/ "./src/service/EarthService.ts":
/*!*************************************!*\
  !*** ./src/service/EarthService.ts ***!
  \*************************************/
/*! exports provided: EarthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarthService", function() { return EarthService; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");


class EarthService {
    constructor(sceneService) {
        this.sceneService = sceneService;
    }
    updateScene() {
        this.sceneService.camera.position.set(250, 0, 0);
        let vector3 = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, 0);
        this.sceneService.camera.lookAt(vector3);
        this.sceneService.controls.target = vector3;
        this.sceneService.controls.enablePan = false;
        this.sceneService.controls.enableKeys = false;
        this.sceneService.controls.maxPolarAngle = Math.PI;
        this.sceneService.controls.minDistance = 10;
        this.sceneService.controls.maxDistance = 80;
    }
    loadEarth(radius, onLoad) {
        this.updateScene();
        let sphere = new three__WEBPACK_IMPORTED_MODULE_0__["SphereGeometry"](radius, 40, 40);
        let material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshPhongMaterial"]();
        material.transparent = true;
        material.map = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]().load('/images/earth/earth4.jpg');
        material.bumpMap = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]().load('/images/earth/earth_bump.jpg');
        material.bumpScale = 0.15;
        material.specularMap = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]().load('/images/earth/earth_spec.jpg');
        material.specular = new three__WEBPACK_IMPORTED_MODULE_0__["Color"]('#909090');
        material.shininess = 5;
        let earth = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](sphere, material);
        earth.name = 'earth';
        let cloudSphere = new three__WEBPACK_IMPORTED_MODULE_0__["SphereGeometry"](radius + 0.1, 40, 40);
        let cloudMaterial = new three__WEBPACK_IMPORTED_MODULE_0__["MeshPhongMaterial"]();
        cloudMaterial.map = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]().load('/images/earth/earth_cloud.png');
        cloudMaterial.transparent = true;
        cloudMaterial.opacity = 1;
        cloudMaterial.blending = three__WEBPACK_IMPORTED_MODULE_0__["AdditiveBlending"];
        let cloudMesh = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](cloudSphere, cloudMaterial);
        cloudMesh.name = "earth_cloud1";
        let cloudSphere2 = new three__WEBPACK_IMPORTED_MODULE_0__["SphereGeometry"](radius + 0.2, 40, 40);
        let cloudMaterial2 = new three__WEBPACK_IMPORTED_MODULE_0__["MeshPhongMaterial"]();
        cloudMaterial2.map = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]().load('/images/earth/earth_cloud.png');
        cloudMaterial2.transparent = true;
        cloudMaterial2.opacity = 1;
        cloudMaterial2.blending = three__WEBPACK_IMPORTED_MODULE_0__["AdditiveBlending"];
        let cloudMesh2 = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](cloudSphere2, cloudMaterial2);
        cloudMesh2.name = "earth_cloud2";
        cloudMesh2.rotation.y = Math.PI;
        let glowSphere = new three__WEBPACK_IMPORTED_MODULE_0__["SphereGeometry"](radius, 40, 40);
        let glowMaterial = new three__WEBPACK_IMPORTED_MODULE_0__["ShaderMaterial"]({
            uniforms: {
                'c': { type: 'f', value: 0.34 },
                'p': { type: 'f', value: 9.17 }
            },
            vertexShader: ['varying vec3 vNormal;', 'void main() {', 'vNormal = normalize( normalMatrix * normal );', 'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', '}'].join('\n'),
            fragmentShader: ['uniform float c;', 'uniform float p;', 'varying vec3 vNormal;', 'void main() {', 'float intensity = pow( c - dot( vNormal, vec3( 0.0, 0.0, 1.0 ) ), p );', 'gl_FragColor = vec4( 0.2, 0.58, 0.9, 0.3 ) * intensity;', '}'].join('\n')
        });
        glowMaterial.side = three__WEBPACK_IMPORTED_MODULE_0__["BackSide"];
        glowMaterial.transparent = false;
        let glowMesh = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](glowSphere, glowMaterial);
        glowMesh.scale.x = glowMesh.scale.y = glowMesh.scale.z = 1.3;
        glowMesh.name = 'glow';
        let blackSphere = new three__WEBPACK_IMPORTED_MODULE_0__["SphereGeometry"](radius, 40, 40);
        let blackMaterial = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({ color: 0x000000 });
        blackMaterial.transparent = false;
        let blackMesh = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](blackSphere, blackMaterial);
        blackMesh.name = 'black';
        let pointsGeometry = new three__WEBPACK_IMPORTED_MODULE_0__["Geometry"]();
        pointsGeometry.vertices.push(new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](-(radius / 1.5) + 1.2, (radius / 1.5) - 0.8, -(radius / 1.5) - 1));
        pointsGeometry.computeBoundingSphere();
        let pointsMaterial = new three__WEBPACK_IMPORTED_MODULE_0__["PointsMaterial"]();
        pointsMaterial.map = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]().load('/images/earth/i_mariana.png');
        pointsMaterial.map.minFilter = three__WEBPACK_IMPORTED_MODULE_0__["LinearFilter"];
        pointsMaterial.size = 4;
        pointsMaterial.transparent = true;
        let points = new three__WEBPACK_IMPORTED_MODULE_0__["Points"](pointsGeometry, pointsMaterial);
        points.name = "气压站";
        this.earth = earth;
        this.cloud = cloudMesh;
        this.cloud2 = cloudMesh2;
        let group = new three__WEBPACK_IMPORTED_MODULE_0__["Group"]();
        earth.add(points);
        group.add(earth);
        group.add(cloudMesh);
        group.add(cloudMesh2);
        this.group = group;
        if (onLoad)
            onLoad(group);
        this.sceneService.scene.add(group);
        this.initAnimate();
    }
    initAnimate() {
        let thid = this;
        let oldPosition = thid.sceneService.camera.position;
        thid.sceneService.cameraInspect(-0.5, new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](40, oldPosition.y, oldPosition.z), function () {
            thid.autoRotationAnimatePlay();
        });
    }
    autoRotationAnimatePlay() {
        this.earth.rotation.y += 0.001;
        this.cloud.rotation.y += 0.0005;
        this.cloud2.rotation.y += 0.0005;
        let thid = this;
        this.requestAnimationFrameFlag = requestAnimationFrame(function () {
            thid.autoRotationAnimatePlay();
        });
    }
    dblclickEarth(callback) {
        let thid = this;
        cancelAnimationFrame(thid.requestAnimationFrameFlag);
        let oldPosition = thid.sceneService.camera.position;
        let newPosition = { x: 40, y: 0, z: 0 };
        let oldRotation = thid.earth.rotation;
        let newRotation = { x: 0, y: 0, z: 0 };
        thid.sceneService.myAnimate(1, function (value) {
            let position_x = oldPosition.x + (newPosition.x - oldPosition.x) * value;
            let position_y = oldPosition.y + (newPosition.y - oldPosition.y) * value;
            let position_z = oldPosition.z + (newPosition.z - oldPosition.z) * value;
            thid.sceneService.camera.position.set(position_x, position_y, position_z);
            let rotation_x = oldRotation.x + (newRotation.x - oldRotation.x) * value;
            let rotation_y = oldRotation.y + (newRotation.y - oldRotation.y) * value;
            let rotation_z = oldRotation.z + (newRotation.z - oldRotation.z) * value;
            thid.earth.rotation.set(rotation_x, rotation_y, rotation_z);
        }, function () {
            let oldPosition = thid.sceneService.camera.position;
            thid.sceneService.cameraInspect(-0.5, new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](10, oldPosition.y, oldPosition.z), function () {
                thid.group.traverse(function (obj) {
                    if (obj.type === 'Mesh') {
                        obj["geometry"].dispose();
                        obj["material"].dispose();
                    }
                });
                thid.sceneService.scene.remove(thid.group);
                thid.kfCloudAnimate(callback);
            });
        });
    }
    kfCloudAnimate(callback) {
        let thid = this;
        let vector3 = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](-5000, -4000, 0);
        thid.sceneService.camera.lookAt(vector3);
        thid.sceneService.controls.target = vector3;
        this.sceneService.controls.minDistance = 0;
        this.sceneService.controls.maxDistance = 8000;
        thid.sceneService.scene.background = new three__WEBPACK_IMPORTED_MODULE_0__["Color"]("#326696");
        let geometry = new three__WEBPACK_IMPORTED_MODULE_0__["PlaneGeometry"](50, 45, 32, 32);
        let texture = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]().load('/images/earth/cloud.png');
        texture.magFilter = three__WEBPACK_IMPORTED_MODULE_0__["LinearMipMapLinearFilter"];
        texture.minFilter = three__WEBPACK_IMPORTED_MODULE_0__["LinearMipMapLinearFilter"];
        let material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({
            map: texture,
            transparent: true,
            opacity: 1
        });
        let kfCloudGroup = new three__WEBPACK_IMPORTED_MODULE_0__["Group"]();
        for (let i = 0; i < 8000; i++) {
            let plane = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, material);
            plane.position.y = -Math.random() * 1000;
            plane.position.x = -Math.random() * 1000;
            plane.position.z = i % 2 === 0 ? Math.random() * 500 : -Math.random() * 500;
            plane.rotation.y = Math.PI / 2;
            plane.scale.z = plane.scale.y = Math.random() * Math.random() * 1.5 + 0.5;
            kfCloudGroup.add(plane);
        }
        thid.sceneService.scene.add(kfCloudGroup);
        window["kfCloudGroup"] = kfCloudGroup;
        thid.sceneService.cameraInspect(-10, new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](-550, -550, 0), function () {
            kfCloudGroup.traverse(function (obj) {
                if (obj.type === 'Mesh') {
                    obj["geometry"].dispose();
                    obj["material"].dispose();
                }
            });
            thid.sceneService.scene.remove(kfCloudGroup);
            if (callback)
                callback();
        });
    }
}


/***/ }),

/***/ "./src/service/ParkService.ts":
/*!************************************!*\
  !*** ./src/service/ParkService.ts ***!
  \************************************/
/*! exports provided: ParrkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParrkService", function() { return ParrkService; });
/* harmony import */ var _loader_CodeLoaderService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader/CodeLoaderService */ "./src/service/loader/CodeLoaderService.ts");
/* harmony import */ var _util_CommonUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/CommonUtil */ "./src/util/CommonUtil.ts");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_renderers_CSS2DRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/renderers/CSS2DRenderer */ "./node_modules/three/examples/jsm/renderers/CSS2DRenderer.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var three_examples_jsm_renderers_CSS3DRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/renderers/CSS3DRenderer */ "./node_modules/three/examples/jsm/renderers/CSS3DRenderer.js");
/* harmony import */ var _loader_OBJLoaderService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loader/OBJLoaderService */ "./src/service/loader/OBJLoaderService.ts");
/* harmony import */ var _loader_FBXLoaderService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loader/FBXLoaderService */ "./src/service/loader/FBXLoaderService.ts");








class ParrkService {
    constructor(sceneService) {
        this.sceneService = sceneService;
    }
    updateScene() {
        let path = "/images/skybox/";
        let format = '.jpg';
        let urls = [
            path + 'px' + format, path + 'nx' + format,
            path + 'py' + format, path + 'ny' + format,
            path + 'pz' + format, path + 'nz' + format
        ];
        this.sceneService.scene.background = new three__WEBPACK_IMPORTED_MODULE_2__["CubeTextureLoader"]().load(urls);
        this.sceneService.camera.position.set(500, 500, 500);
        this.sceneService.camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0));
        this.sceneService.controls.target = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0);
        this.sceneService.controls.enablePan = true;
        this.sceneService.controls.enableKeys = true;
        this.sceneService.controls.maxPolarAngle = Math.PI * 0.5;
        this.sceneService.controls.minDistance = 100;
        this.sceneService.controls.maxDistance = 5000;
    }
    loadParrk() {
        this.updateScene();
        let thid = this;
        let groundTexture = new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]().load("/images/minecraft/grasslight-big.jpg");
        groundTexture.wrapS = groundTexture.wrapT = three__WEBPACK_IMPORTED_MODULE_2__["RepeatWrapping"];
        groundTexture.repeat.set(25, 25);
        groundTexture.anisotropy = 16;
        let groundMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshLambertMaterial"]({ map: groundTexture });
        let mesh = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["PlaneBufferGeometry"](20000, 20000), groundMaterial);
        mesh.rotation.x = -Math.PI / 2;
        mesh.receiveShadow = true;
        thid.sceneService.scene.add(mesh);
        let codeLoaderService = new _loader_CodeLoaderService__WEBPACK_IMPORTED_MODULE_0__["CodeLoaderService"](thid.sceneService);
        codeLoaderService.loadCode(70, 70, 70, function (mesh) {
            mesh.position.set(-100, 100, 0);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            thid.sceneService.addEventListener(mesh, "click", function (object) {
                console.log("立方体对象被鼠标点击");
                let oldLookAt = thid.sceneService.controls.target;
                let newLookAt = object.position;
                if (!_util_CommonUtil__WEBPACK_IMPORTED_MODULE_1__["CommonUtil"].objIsEqual(oldLookAt, newLookAt)) {
                    thid.sceneService.myAnimate(2, function (value) {
                        let lookAt_x = oldLookAt.x + (newLookAt.x - oldLookAt.x) * value;
                        let lookAt_y = oldLookAt.y + (newLookAt.y - oldLookAt.y) * value;
                        let lookAt_z = oldLookAt.z + (newLookAt.z - oldLookAt.z) * value;
                        let vector3 = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](lookAt_x, lookAt_y, lookAt_z);
                        thid.sceneService.camera.lookAt(vector3);
                        thid.sceneService.controls.target = vector3;
                    }, function () {
                        let oldPosition = thid.sceneService.camera.position;
                        let newPosition = object.position;
                        thid.sceneService.myAnimate(2, function (value) {
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
                            let html = "<div class=\"element\">" +
                                "<div class=\"number\">编号：001</div>" +
                                "<div class=\"symbol\">立方体</div>" +
                                "<div class=\"details\">普通的立方体，2D的label</div>" +
                                "</div>";
                            let cSS2DObject = new three_examples_jsm_renderers_CSS2DRenderer__WEBPACK_IMPORTED_MODULE_3__["CSS2DObject"](jquery__WEBPACK_IMPORTED_MODULE_4__(html)[0]);
                            cSS2DObject.name = "2dLabel";
                            cSS2DObject.position.y = 120 / 2 + 70 / 2;
                            object.remove(object.getObjectByName("2dLabel"));
                            object.add(cSS2DObject);
                        });
                    });
                }
            });
        });
        codeLoaderService.loadCode(70, 70, 70, function (mesh) {
            mesh.position.set(100, 100, 0);
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            thid.sceneService.addEventListener(mesh, "click", function (object) {
                console.log("立方体对象被鼠标点击");
                let oldLookAt = thid.sceneService.controls.target;
                let newLookAt = object.position;
                if (!_util_CommonUtil__WEBPACK_IMPORTED_MODULE_1__["CommonUtil"].objIsEqual(oldLookAt, newLookAt)) {
                    thid.sceneService.myAnimate(2, function (value) {
                        let lookAt_x = oldLookAt.x + (newLookAt.x - oldLookAt.x) * value;
                        let lookAt_y = oldLookAt.y + (newLookAt.y - oldLookAt.y) * value;
                        let lookAt_z = oldLookAt.z + (newLookAt.z - oldLookAt.z) * value;
                        let vector3 = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](lookAt_x, lookAt_y, lookAt_z);
                        thid.sceneService.camera.lookAt(vector3);
                        thid.sceneService.controls.target = vector3;
                    }, function () {
                        let oldPosition = thid.sceneService.camera.position;
                        let newPosition = object.position;
                        thid.sceneService.myAnimate(2, function (value) {
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
                            let html = "<div class=\"element\">" +
                                "<div class=\"number\">编号：002</div>" +
                                "<div class=\"symbol\">立方体</div>" +
                                "<div class=\"details\">普通的立方体，3D的label</div>" +
                                "</div>";
                            let cSS3DObject = new three_examples_jsm_renderers_CSS3DRenderer__WEBPACK_IMPORTED_MODULE_5__["CSS3DObject"](jquery__WEBPACK_IMPORTED_MODULE_4__(html)[0]);
                            cSS3DObject.name = "3dLabel";
                            cSS3DObject.position.y = 120 / 2 + 70 / 2;
                            object.remove(object.getObjectByName("3dLabel"));
                            object.add(cSS3DObject);
                        });
                    });
                }
            });
        });
        let objLoaderService = new _loader_OBJLoaderService__WEBPACK_IMPORTED_MODULE_6__["OBJLoaderService"](thid.sceneService);
        objLoaderService.loadObj("/models/obj/male02/male02", function (object) {
            object.position.set(300, 0, 0);
            object.castShadow = true;
            object.receiveShadow = true;
            thid.sceneService.addEventListener(object, "click", function (object) {
                console.log("男人被鼠标点击");
                let oldLookAt = thid.sceneService.controls.target;
                let newLookAt = object.position;
                if (!_util_CommonUtil__WEBPACK_IMPORTED_MODULE_1__["CommonUtil"].objIsEqual(oldLookAt, newLookAt)) {
                    thid.sceneService.myAnimate(2, function (value) {
                        let lookAt_x = oldLookAt.x + (newLookAt.x - oldLookAt.x) * value;
                        let lookAt_y = oldLookAt.y + (newLookAt.y - oldLookAt.y) * value;
                        let lookAt_z = oldLookAt.z + (newLookAt.z - oldLookAt.z) * value;
                        let vector3 = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](lookAt_x, lookAt_y, lookAt_z);
                        thid.sceneService.camera.lookAt(vector3);
                        thid.sceneService.controls.target = vector3;
                    }, function () {
                        let oldPosition = thid.sceneService.camera.position;
                        let newPosition = object.position;
                        thid.sceneService.myAnimate(2, function (value) {
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
                            let html = "<div class=\"element\">" +
                                "<div class=\"number\">编号：001</div>" +
                                "<div class=\"symbol\">男人</div>" +
                                "<div class=\"details\">站立的男人，3D的label</div>" +
                                "</div>";
                            let cSS3DObject = new three_examples_jsm_renderers_CSS3DRenderer__WEBPACK_IMPORTED_MODULE_5__["CSS3DObject"](jquery__WEBPACK_IMPORTED_MODULE_4__(html)[0]);
                            cSS3DObject.name = "3dLabel";
                            cSS3DObject.position.y = 120 / 2 + 70 / 2;
                            object.remove(object.getObjectByName("3dLabel"));
                            object.add(cSS3DObject);
                        });
                    });
                }
            });
        });
        let fbxLoaderService = new _loader_FBXLoaderService__WEBPACK_IMPORTED_MODULE_7__["FBXLoaderService"](thid.sceneService);
        fbxLoaderService.loadFbx("/models/fbx/samba_dancing/Samba Dancing", function (object) {
            object.position.set(-300, 0, 0);
            thid.sceneService.scene.add(new three__WEBPACK_IMPORTED_MODULE_2__["SkeletonHelper"](object));
            object.traverse(function (child) {
                child.castShadow = true;
                child.receiveShadow = true;
            });
            let clock = new three__WEBPACK_IMPORTED_MODULE_2__["Clock"]();
            let mixer = new three__WEBPACK_IMPORTED_MODULE_2__["AnimationMixer"](object);
            let action = mixer.clipAction(object.animations[0]);
            action.play();
            animate();
            function animate() {
                mixer.update(clock.getDelta());
                requestAnimationFrame(animate);
            }
            thid.sceneService.addEventListener(object, "click", function (object) {
                console.log("女人被鼠标点击");
                let oldLookAt = thid.sceneService.controls.target;
                let newLookAt = object.position;
                if (!_util_CommonUtil__WEBPACK_IMPORTED_MODULE_1__["CommonUtil"].objIsEqual(oldLookAt, newLookAt)) {
                    thid.sceneService.myAnimate(2, function (value) {
                        let lookAt_x = oldLookAt.x + (newLookAt.x - oldLookAt.x) * value;
                        let lookAt_y = oldLookAt.y + (newLookAt.y - oldLookAt.y) * value;
                        let lookAt_z = oldLookAt.z + (newLookAt.z - oldLookAt.z) * value;
                        let vector3 = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](lookAt_x, lookAt_y, lookAt_z);
                        thid.sceneService.camera.lookAt(vector3);
                        thid.sceneService.controls.target = vector3;
                    }, function () {
                        let oldPosition = thid.sceneService.camera.position;
                        let newPosition = object.position;
                        thid.sceneService.myAnimate(2, function (value) {
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
                            let html = "<div class=\"element\">" +
                                "<div class=\"number\">编号：001</div>" +
                                "<div class=\"symbol\">女人</div>" +
                                "<div class=\"details\">跳舞的女人，3D的label</div>" +
                                "</div>";
                            let cSS3DObject = new three_examples_jsm_renderers_CSS3DRenderer__WEBPACK_IMPORTED_MODULE_5__["CSS3DObject"](jquery__WEBPACK_IMPORTED_MODULE_4__(html)[0]);
                            cSS3DObject.name = "3dLabel";
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


/***/ }),

/***/ "./src/service/SceneService.ts":
/*!*************************************!*\
  !*** ./src/service/SceneService.ts ***!
  \*************************************/
/*! exports provided: SceneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneService", function() { return SceneService; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
/* harmony import */ var three_examples_jsm_renderers_CSS2DRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/renderers/CSS2DRenderer */ "./node_modules/three/examples/jsm/renderers/CSS2DRenderer.js");
/* harmony import */ var three_examples_jsm_renderers_CSS3DRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/renderers/CSS3DRenderer */ "./node_modules/three/examples/jsm/renderers/CSS3DRenderer.js");




class SceneService {
    initScene() {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_0__["Scene"]();
        this.perspectiveCamera();
        this.webGLRenderer();
        this.cSS2DRendererFun();
        this.cSS3DRendererFun();
        this.orbitControls();
        this.light();
        this.background();
        this.render();
    }
    background() {
    }
    orbitControls() {
        this.controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__["OrbitControls"](this.camera, this.cSS3DRenderer.domElement);
        window.addEventListener('resize', this.onWindowResize, false);
        this.controls.target = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, 0);
    }
    webGLRenderer() {
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderer"]({ antialias: true, logarithmicDepthBuffer: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        document.body.appendChild(this.renderer.domElement);
    }
    cSS2DRendererFun() {
        this.cSS2DRenderer = new three_examples_jsm_renderers_CSS2DRenderer__WEBPACK_IMPORTED_MODULE_2__["CSS2DRenderer"]();
        this.cSS2DRenderer.setSize(window.innerWidth, window.innerHeight);
        this.cSS2DRenderer.domElement.style.position = 'absolute';
        this.cSS2DRenderer.domElement.style.top = "0";
        document.body.appendChild(this.cSS2DRenderer.domElement);
    }
    cSS3DRendererFun() {
        this.cSS3DRenderer = new three_examples_jsm_renderers_CSS3DRenderer__WEBPACK_IMPORTED_MODULE_3__["CSS3DRenderer"]();
        this.cSS3DRenderer.setSize(window.innerWidth, window.innerHeight);
        this.cSS3DRenderer.domElement.style.position = 'absolute';
        this.cSS3DRenderer.domElement.style.top = "0";
        document.body.appendChild(this.cSS3DRenderer.domElement);
    }
    perspectiveCamera() {
        this.camera = new three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"](30, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.set(0, 0, 0);
        this.camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, 0));
    }
    light() {
        this.scene.add(new three__WEBPACK_IMPORTED_MODULE_0__["AmbientLight"](0xdfebff, 0.3));
        let directionalLight = new three__WEBPACK_IMPORTED_MODULE_0__["DirectionalLight"](0xffffff);
        directionalLight.position.set(0, 5000, 5000);
        directionalLight.castShadow = true;
        directionalLight.name = "basisDirectionalLight";
        this.scene.add(directionalLight);
        this.scene.add(new three__WEBPACK_IMPORTED_MODULE_0__["CameraHelper"](directionalLight.shadow.camera));
    }
    render() {
        this.renderer.render(this.scene, this.camera);
        this.cSS2DRenderer.render(this.scene, this.camera);
        this.cSS3DRenderer.render(this.scene, this.camera);
        this.controls.update();
        let thid = this;
        requestAnimationFrame(function () {
            thid.render();
        });
    }
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.cSS2DRenderer.setSize(window.innerWidth, window.innerHeight);
        this.cSS3DRenderer.setSize(window.innerWidth, window.innerHeight);
    }
    addEventListener(listenerObj, even, callback) {
        let thid = this;
        this.cSS3DRenderer.domElement.addEventListener(even, function (event) {
            event.preventDefault();
            let raycaster = new three__WEBPACK_IMPORTED_MODULE_0__["Raycaster"]();
            let mouse = new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"]();
            mouse.x = (event["clientX"] / thid.cSS3DRenderer.domElement.clientWidth) * 2 - 1;
            mouse.y = -(event["clientY"] / thid.cSS3DRenderer.domElement.clientHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, thid.camera);
            let intersects;
            if (listenerObj.type == "Mesh") {
                intersects = raycaster.intersectObjects([listenerObj], false);
            }
            else {
                intersects = raycaster.intersectObjects(listenerObj.children, true);
            }
            if (intersects.length > 0) {
                if (callback)
                    callback(listenerObj);
            }
        }, false);
    }
    myAnimate(level, onUpdate, callback) {
        let value = 0;
        let _value = 0.01 * level;
        animate(value);
        function animate(value) {
            if (onUpdate)
                onUpdate(value);
            requestAnimationFrame(function () {
                value += _value;
                value = Number(value.toFixed(2));
                if (value > 1) {
                    if (callback)
                        callback();
                    return;
                }
                animate(value);
            });
        }
    }
    cameraInspect(value, position, callback) {
        let thid = this;
        let flag = value >= 0;
        cameraInspectAnimate();
        function cameraInspectAnimate() {
            if (flag) {
                if (thid.camera.position.x < position["x"]) {
                    thid.camera.position.x += value;
                }
                if (thid.camera.position.y < position["y"]) {
                    thid.camera.position.y += value;
                }
                if (thid.camera.position.z < position["z"]) {
                    thid.camera.position.z += value;
                }
            }
            else {
                if (thid.camera.position.x > position["x"]) {
                    thid.camera.position.x += value;
                }
                if (thid.camera.position.y > position["y"]) {
                    thid.camera.position.y += value;
                }
                if (thid.camera.position.z > position["z"]) {
                    thid.camera.position.z += value;
                }
            }
            requestAnimationFrame(function () {
                if (flag) {
                    if (thid.camera.position.x >= position["x"] &&
                        thid.camera.position.y >= position["y"] &&
                        thid.camera.position.z >= position["z"]) {
                        if (callback)
                            callback();
                        return;
                    }
                }
                else {
                    if (thid.camera.position.x <= position["x"] &&
                        thid.camera.position.y <= position["y"] &&
                        thid.camera.position.z <= position["z"]) {
                        if (callback)
                            callback();
                        return;
                    }
                }
                cameraInspectAnimate();
            });
        }
    }
}


/***/ }),

/***/ "./src/service/loader/CodeLoaderService.ts":
/*!*************************************************!*\
  !*** ./src/service/loader/CodeLoaderService.ts ***!
  \*************************************************/
/*! exports provided: CodeLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeLoaderService", function() { return CodeLoaderService; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");

class CodeLoaderService {
    constructor(sceneService) {
        this.sceneService = sceneService;
    }
    loadCode(width, height, depth, onLoad) {
        let geometry = new three__WEBPACK_IMPORTED_MODULE_0__["BoxGeometry"](width, height, depth);
        geometry[width] = width;
        geometry[height] = height;
        geometry[depth] = depth;
        let material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshPhongMaterial"]();
        let mesh = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, material);
        if (onLoad)
            onLoad(mesh);
        this.sceneService.scene.add(mesh);
        this.animate(mesh);
    }
    animate(mesh) {
        mesh.rotation.y += 0.02;
        let thid = this;
        requestAnimationFrame(function () {
            thid.animate(mesh);
        });
    }
}


/***/ }),

/***/ "./src/service/loader/FBXLoaderService.ts":
/*!************************************************!*\
  !*** ./src/service/loader/FBXLoaderService.ts ***!
  \************************************************/
/*! exports provided: FBXLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FBXLoaderService", function() { return FBXLoaderService; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_loaders_FBXLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/FBXLoader */ "./node_modules/three/examples/jsm/loaders/FBXLoader.js");
/* harmony import */ var three_examples_jsm_loaders_TGALoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/loaders/TGALoader */ "./node_modules/three/examples/jsm/loaders/TGALoader.js");
/* harmony import */ var three_examples_jsm_loaders_DDSLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/loaders/DDSLoader */ "./node_modules/three/examples/jsm/loaders/DDSLoader.js");




class FBXLoaderService {
    constructor(sceneService) {
        this.sceneService = sceneService;
    }
    loadFbx(url, onLoad) {
        let thid = this;
        three__WEBPACK_IMPORTED_MODULE_0__["Loader"].Handlers.add(/\.tga$/i, new three_examples_jsm_loaders_TGALoader__WEBPACK_IMPORTED_MODULE_2__["TGALoader"]());
        three__WEBPACK_IMPORTED_MODULE_0__["Loader"].Handlers.add(/\.dds$/i, new three_examples_jsm_loaders_DDSLoader__WEBPACK_IMPORTED_MODULE_3__["DDSLoader"]());
        new three_examples_jsm_loaders_FBXLoader__WEBPACK_IMPORTED_MODULE_1__["FBXLoader"]().load(url + ".fbx", function (object) {
            if (onLoad)
                onLoad(object);
            thid.sceneService.scene.add(object);
        });
    }
}


/***/ }),

/***/ "./src/service/loader/OBJLoaderService.ts":
/*!************************************************!*\
  !*** ./src/service/loader/OBJLoaderService.ts ***!
  \************************************************/
/*! exports provided: OBJLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBJLoaderService", function() { return OBJLoaderService; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_loaders_MTLLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/MTLLoader */ "./node_modules/three/examples/jsm/loaders/MTLLoader.js");
/* harmony import */ var three_examples_jsm_loaders_OBJLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/loaders/OBJLoader */ "./node_modules/three/examples/jsm/loaders/OBJLoader.js");
/* harmony import */ var three_examples_jsm_loaders_TGALoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/loaders/TGALoader */ "./node_modules/three/examples/jsm/loaders/TGALoader.js");
/* harmony import */ var three_examples_jsm_loaders_DDSLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/loaders/DDSLoader */ "./node_modules/three/examples/jsm/loaders/DDSLoader.js");





class OBJLoaderService {
    constructor(sceneService) {
        this.sceneService = sceneService;
    }
    loadObj(url, onLoad) {
        let thid = this;
        three__WEBPACK_IMPORTED_MODULE_0__["Loader"].Handlers.add(/\.tga$/i, new three_examples_jsm_loaders_TGALoader__WEBPACK_IMPORTED_MODULE_3__["TGALoader"]());
        three__WEBPACK_IMPORTED_MODULE_0__["Loader"].Handlers.add(/\.dds$/i, new three_examples_jsm_loaders_DDSLoader__WEBPACK_IMPORTED_MODULE_4__["DDSLoader"]());
        new three_examples_jsm_loaders_MTLLoader__WEBPACK_IMPORTED_MODULE_1__["MTLLoader"]().load(url + '.mtl', function (materials) {
            materials.preload();
            let objLoader = new three_examples_jsm_loaders_OBJLoader__WEBPACK_IMPORTED_MODULE_2__["OBJLoader"]();
            objLoader.setMaterials(materials);
            objLoader.load(url + '.obj', function (object) {
                if (onLoad)
                    onLoad(object);
                thid.sceneService.scene.add(object);
            });
        });
    }
}


/***/ }),

/***/ "./src/util/CommonUtil.ts":
/*!********************************!*\
  !*** ./src/util/CommonUtil.ts ***!
  \********************************/
/*! exports provided: CommonUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonUtil", function() { return CommonUtil; });
class CommonUtil {
    static objIsEqual(obj1, obj2) {
        let o1 = obj1 instanceof Object;
        let o2 = obj2 instanceof Object;
        if (!o1 || !o2) {
            return obj1 === obj2;
        }
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }
        for (let attr in obj1) {
            let t1 = obj1[attr] instanceof Object;
            let t2 = obj2[attr] instanceof Object;
            if (t1 && t2) {
                return this.objIsEqual(obj1[attr], obj2[attr]);
            }
            else if (obj1[attr] !== obj2[attr]) {
                return false;
            }
        }
        return true;
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXIvTWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9FYXJ0aFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvUGFya1NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvU2NlbmVTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlL2xvYWRlci9Db2RlTG9hZGVyU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9sb2FkZXIvRkJYTG9hZGVyU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9sb2FkZXIvT0JKTG9hZGVyU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9Db21tb25VdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFD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QSwyQkFBMkIsdURBQXVCO0FBQ2xELHVCQUF1QiwwQ0FBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUNrQztBQUNBO0FBQ0E7QUFDMUQ7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0Q0FBWSw2QkFBNkIsOEVBQVM7QUFDMUQsUUFBUSw0Q0FBWSw2QkFBNkIsOEVBQVM7QUFDMUQsWUFBWSw4RUFBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUNrQztBQUNBO0FBQ0E7QUFDQTtBQUMxRDtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDRDQUFZLDZCQUE2Qiw4RUFBUztBQUMxRCxRQUFRLDRDQUFZLDZCQUE2Qiw4RUFBUztBQUMxRCxZQUFZLDhFQUFTO0FBQ3JCO0FBQ0EsZ0NBQWdDLDhFQUFTO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvY29udHJvbGxlci9NYWluLnRzXCIsXCJ2ZW5kb3JzLW1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgeyBTY2VuZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZS9TY2VuZVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRWFydGhTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2UvRWFydGhTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBhcnJrU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlL1BhcmtTZXJ2aWNlXCI7XHJcbmxldCBzY2VuZVNlcnZpY2UgPSBuZXcgU2NlbmVTZXJ2aWNlKCk7XHJcbnNjZW5lU2VydmljZS5pbml0U2NlbmUoKTtcclxubGV0IGVhcnRoU2VydmljZSA9IG5ldyBFYXJ0aFNlcnZpY2Uoc2NlbmVTZXJ2aWNlKTtcclxuZWFydGhTZXJ2aWNlLmxvYWRFYXJ0aCg1LCBmdW5jdGlvbiAoZ3JvdXApIHtcclxuICAgIGdyb3VwLnJvdGF0aW9uLnNldCgtTWF0aC5QSSAvIDgsIC1NYXRoLlBJIC8gMS42MywgMCk7XHJcbiAgICBzY2VuZVNlcnZpY2UuYWRkRXZlbnRMaXN0ZW5lcihncm91cCwgXCJkYmxjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLlnLDnkIPooqvpvKDmoIflj4zlh7tcIik7XHJcbiAgICAgICAgZWFydGhTZXJ2aWNlLmRibGNsaWNrRWFydGgoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWKoOi9veWbreWMui4uLlwiKTtcclxuICAgICAgICAgICAgbmV3IFBhcnJrU2VydmljZShzY2VuZVNlcnZpY2UpLmxvYWRQYXJyaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pO1xyXG53aW5kb3dbXCJzY2VuZVNlcnZpY2VcIl0gPSBzY2VuZVNlcnZpY2U7XHJcbndpbmRvd1tcImVhcnRoU2VydmljZVwiXSA9IGVhcnRoU2VydmljZTtcclxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IENvbG9yLCBHcm91cCB9IGZyb20gXCJ0aHJlZVwiO1xyXG5leHBvcnQgY2xhc3MgRWFydGhTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlID0gc2NlbmVTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlU2NlbmUoKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2UuY2FtZXJhLnBvc2l0aW9uLnNldCgyNTAsIDAsIDApO1xyXG4gICAgICAgIGxldCB2ZWN0b3IzID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2UuY2FtZXJhLmxvb2tBdCh2ZWN0b3IzKTtcclxuICAgICAgICB0aGlzLnNjZW5lU2VydmljZS5jb250cm9scy50YXJnZXQgPSB2ZWN0b3IzO1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLmVuYWJsZVBhbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLmVuYWJsZUtleXMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjZW5lU2VydmljZS5jb250cm9scy5tYXhQb2xhckFuZ2xlID0gTWF0aC5QSTtcclxuICAgICAgICB0aGlzLnNjZW5lU2VydmljZS5jb250cm9scy5taW5EaXN0YW5jZSA9IDEwO1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLm1heERpc3RhbmNlID0gODA7XHJcbiAgICB9XHJcbiAgICBsb2FkRWFydGgocmFkaXVzLCBvbkxvYWQpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNjZW5lKCk7XHJcbiAgICAgICAgbGV0IHNwaGVyZSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeShyYWRpdXMsIDQwLCA0MCk7XHJcbiAgICAgICAgbGV0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKCk7XHJcbiAgICAgICAgbWF0ZXJpYWwudHJhbnNwYXJlbnQgPSB0cnVlO1xyXG4gICAgICAgIG1hdGVyaWFsLm1hcCA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZCgnL2ltYWdlcy9lYXJ0aC9lYXJ0aDQuanBnJyk7XHJcbiAgICAgICAgbWF0ZXJpYWwuYnVtcE1hcCA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZCgnL2ltYWdlcy9lYXJ0aC9lYXJ0aF9idW1wLmpwZycpO1xyXG4gICAgICAgIG1hdGVyaWFsLmJ1bXBTY2FsZSA9IDAuMTU7XHJcbiAgICAgICAgbWF0ZXJpYWwuc3BlY3VsYXJNYXAgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpLmxvYWQoJy9pbWFnZXMvZWFydGgvZWFydGhfc3BlYy5qcGcnKTtcclxuICAgICAgICBtYXRlcmlhbC5zcGVjdWxhciA9IG5ldyBUSFJFRS5Db2xvcignIzkwOTA5MCcpO1xyXG4gICAgICAgIG1hdGVyaWFsLnNoaW5pbmVzcyA9IDU7XHJcbiAgICAgICAgbGV0IGVhcnRoID0gbmV3IFRIUkVFLk1lc2goc3BoZXJlLCBtYXRlcmlhbCk7XHJcbiAgICAgICAgZWFydGgubmFtZSA9ICdlYXJ0aCc7XHJcbiAgICAgICAgbGV0IGNsb3VkU3BoZXJlID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KHJhZGl1cyArIDAuMSwgNDAsIDQwKTtcclxuICAgICAgICBsZXQgY2xvdWRNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCgpO1xyXG4gICAgICAgIGNsb3VkTWF0ZXJpYWwubWFwID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKCcvaW1hZ2VzL2VhcnRoL2VhcnRoX2Nsb3VkLnBuZycpO1xyXG4gICAgICAgIGNsb3VkTWF0ZXJpYWwudHJhbnNwYXJlbnQgPSB0cnVlO1xyXG4gICAgICAgIGNsb3VkTWF0ZXJpYWwub3BhY2l0eSA9IDE7XHJcbiAgICAgICAgY2xvdWRNYXRlcmlhbC5ibGVuZGluZyA9IFRIUkVFLkFkZGl0aXZlQmxlbmRpbmc7XHJcbiAgICAgICAgbGV0IGNsb3VkTWVzaCA9IG5ldyBUSFJFRS5NZXNoKGNsb3VkU3BoZXJlLCBjbG91ZE1hdGVyaWFsKTtcclxuICAgICAgICBjbG91ZE1lc2gubmFtZSA9IFwiZWFydGhfY2xvdWQxXCI7XHJcbiAgICAgICAgbGV0IGNsb3VkU3BoZXJlMiA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeShyYWRpdXMgKyAwLjIsIDQwLCA0MCk7XHJcbiAgICAgICAgbGV0IGNsb3VkTWF0ZXJpYWwyID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKCk7XHJcbiAgICAgICAgY2xvdWRNYXRlcmlhbDIubWFwID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKCcvaW1hZ2VzL2VhcnRoL2VhcnRoX2Nsb3VkLnBuZycpO1xyXG4gICAgICAgIGNsb3VkTWF0ZXJpYWwyLnRyYW5zcGFyZW50ID0gdHJ1ZTtcclxuICAgICAgICBjbG91ZE1hdGVyaWFsMi5vcGFjaXR5ID0gMTtcclxuICAgICAgICBjbG91ZE1hdGVyaWFsMi5ibGVuZGluZyA9IFRIUkVFLkFkZGl0aXZlQmxlbmRpbmc7XHJcbiAgICAgICAgbGV0IGNsb3VkTWVzaDIgPSBuZXcgVEhSRUUuTWVzaChjbG91ZFNwaGVyZTIsIGNsb3VkTWF0ZXJpYWwyKTtcclxuICAgICAgICBjbG91ZE1lc2gyLm5hbWUgPSBcImVhcnRoX2Nsb3VkMlwiO1xyXG4gICAgICAgIGNsb3VkTWVzaDIucm90YXRpb24ueSA9IE1hdGguUEk7XHJcbiAgICAgICAgbGV0IGdsb3dTcGhlcmUgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkocmFkaXVzLCA0MCwgNDApO1xyXG4gICAgICAgIGxldCBnbG93TWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICB1bmlmb3Jtczoge1xyXG4gICAgICAgICAgICAgICAgJ2MnOiB7IHR5cGU6ICdmJywgdmFsdWU6IDAuMzQgfSxcclxuICAgICAgICAgICAgICAgICdwJzogeyB0eXBlOiAnZicsIHZhbHVlOiA5LjE3IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdmVydGV4U2hhZGVyOiBbJ3ZhcnlpbmcgdmVjMyB2Tm9ybWFsOycsICd2b2lkIG1haW4oKSB7JywgJ3ZOb3JtYWwgPSBub3JtYWxpemUoIG5vcm1hbE1hdHJpeCAqIG5vcm1hbCApOycsICdnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7JywgJ30nXS5qb2luKCdcXG4nKSxcclxuICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IFsndW5pZm9ybSBmbG9hdCBjOycsICd1bmlmb3JtIGZsb2F0IHA7JywgJ3ZhcnlpbmcgdmVjMyB2Tm9ybWFsOycsICd2b2lkIG1haW4oKSB7JywgJ2Zsb2F0IGludGVuc2l0eSA9IHBvdyggYyAtIGRvdCggdk5vcm1hbCwgdmVjMyggMC4wLCAwLjAsIDEuMCApICksIHAgKTsnLCAnZ2xfRnJhZ0NvbG9yID0gdmVjNCggMC4yLCAwLjU4LCAwLjksIDAuMyApICogaW50ZW5zaXR5OycsICd9J10uam9pbignXFxuJylcclxuICAgICAgICB9KTtcclxuICAgICAgICBnbG93TWF0ZXJpYWwuc2lkZSA9IFRIUkVFLkJhY2tTaWRlO1xyXG4gICAgICAgIGdsb3dNYXRlcmlhbC50cmFuc3BhcmVudCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBnbG93TWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdsb3dTcGhlcmUsIGdsb3dNYXRlcmlhbCk7XHJcbiAgICAgICAgZ2xvd01lc2guc2NhbGUueCA9IGdsb3dNZXNoLnNjYWxlLnkgPSBnbG93TWVzaC5zY2FsZS56ID0gMS4zO1xyXG4gICAgICAgIGdsb3dNZXNoLm5hbWUgPSAnZ2xvdyc7XHJcbiAgICAgICAgbGV0IGJsYWNrU3BoZXJlID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KHJhZGl1cywgNDAsIDQwKTtcclxuICAgICAgICBsZXQgYmxhY2tNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAweDAwMDAwMCB9KTtcclxuICAgICAgICBibGFja01hdGVyaWFsLnRyYW5zcGFyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGJsYWNrTWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJsYWNrU3BoZXJlLCBibGFja01hdGVyaWFsKTtcclxuICAgICAgICBibGFja01lc2gubmFtZSA9ICdibGFjayc7XHJcbiAgICAgICAgbGV0IHBvaW50c0dlb21ldHJ5ID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcbiAgICAgICAgcG9pbnRzR2VvbWV0cnkudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygtKHJhZGl1cyAvIDEuNSkgKyAxLjIsIChyYWRpdXMgLyAxLjUpIC0gMC44LCAtKHJhZGl1cyAvIDEuNSkgLSAxKSk7XHJcbiAgICAgICAgcG9pbnRzR2VvbWV0cnkuY29tcHV0ZUJvdW5kaW5nU3BoZXJlKCk7XHJcbiAgICAgICAgbGV0IHBvaW50c01hdGVyaWFsID0gbmV3IFRIUkVFLlBvaW50c01hdGVyaWFsKCk7XHJcbiAgICAgICAgcG9pbnRzTWF0ZXJpYWwubWFwID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKCcvaW1hZ2VzL2VhcnRoL2lfbWFyaWFuYS5wbmcnKTtcclxuICAgICAgICBwb2ludHNNYXRlcmlhbC5tYXAubWluRmlsdGVyID0gVEhSRUUuTGluZWFyRmlsdGVyO1xyXG4gICAgICAgIHBvaW50c01hdGVyaWFsLnNpemUgPSA0O1xyXG4gICAgICAgIHBvaW50c01hdGVyaWFsLnRyYW5zcGFyZW50ID0gdHJ1ZTtcclxuICAgICAgICBsZXQgcG9pbnRzID0gbmV3IFRIUkVFLlBvaW50cyhwb2ludHNHZW9tZXRyeSwgcG9pbnRzTWF0ZXJpYWwpO1xyXG4gICAgICAgIHBvaW50cy5uYW1lID0gXCLmsJTljovnq5lcIjtcclxuICAgICAgICB0aGlzLmVhcnRoID0gZWFydGg7XHJcbiAgICAgICAgdGhpcy5jbG91ZCA9IGNsb3VkTWVzaDtcclxuICAgICAgICB0aGlzLmNsb3VkMiA9IGNsb3VkTWVzaDI7XHJcbiAgICAgICAgbGV0IGdyb3VwID0gbmV3IFRIUkVFLkdyb3VwKCk7XHJcbiAgICAgICAgZWFydGguYWRkKHBvaW50cyk7XHJcbiAgICAgICAgZ3JvdXAuYWRkKGVhcnRoKTtcclxuICAgICAgICBncm91cC5hZGQoY2xvdWRNZXNoKTtcclxuICAgICAgICBncm91cC5hZGQoY2xvdWRNZXNoMik7XHJcbiAgICAgICAgdGhpcy5ncm91cCA9IGdyb3VwO1xyXG4gICAgICAgIGlmIChvbkxvYWQpXHJcbiAgICAgICAgICAgIG9uTG9hZChncm91cCk7XHJcbiAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2Uuc2NlbmUuYWRkKGdyb3VwKTtcclxuICAgICAgICB0aGlzLmluaXRBbmltYXRlKCk7XHJcbiAgICB9XHJcbiAgICBpbml0QW5pbWF0ZSgpIHtcclxuICAgICAgICBsZXQgdGhpZCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IG9sZFBvc2l0aW9uID0gdGhpZC5zY2VuZVNlcnZpY2UuY2FtZXJhLnBvc2l0aW9uO1xyXG4gICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLmNhbWVyYUluc3BlY3QoLTAuNSwgbmV3IFRIUkVFLlZlY3RvcjMoNDAsIG9sZFBvc2l0aW9uLnksIG9sZFBvc2l0aW9uLnopLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaWQuYXV0b1JvdGF0aW9uQW5pbWF0ZVBsYXkoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGF1dG9Sb3RhdGlvbkFuaW1hdGVQbGF5KCkge1xyXG4gICAgICAgIHRoaXMuZWFydGgucm90YXRpb24ueSArPSAwLjAwMTtcclxuICAgICAgICB0aGlzLmNsb3VkLnJvdGF0aW9uLnkgKz0gMC4wMDA1O1xyXG4gICAgICAgIHRoaXMuY2xvdWQyLnJvdGF0aW9uLnkgKz0gMC4wMDA1O1xyXG4gICAgICAgIGxldCB0aGlkID0gdGhpcztcclxuICAgICAgICB0aGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZUZsYWcgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlkLmF1dG9Sb3RhdGlvbkFuaW1hdGVQbGF5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBkYmxjbGlja0VhcnRoKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgbGV0IHRoaWQgPSB0aGlzO1xyXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaWQucmVxdWVzdEFuaW1hdGlvbkZyYW1lRmxhZyk7XHJcbiAgICAgICAgbGV0IG9sZFBvc2l0aW9uID0gdGhpZC5zY2VuZVNlcnZpY2UuY2FtZXJhLnBvc2l0aW9uO1xyXG4gICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IHsgeDogNDAsIHk6IDAsIHo6IDAgfTtcclxuICAgICAgICBsZXQgb2xkUm90YXRpb24gPSB0aGlkLmVhcnRoLnJvdGF0aW9uO1xyXG4gICAgICAgIGxldCBuZXdSb3RhdGlvbiA9IHsgeDogMCwgeTogMCwgejogMCB9O1xyXG4gICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLm15QW5pbWF0ZSgxLCBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgbGV0IHBvc2l0aW9uX3ggPSBvbGRQb3NpdGlvbi54ICsgKG5ld1Bvc2l0aW9uLnggLSBvbGRQb3NpdGlvbi54KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgcG9zaXRpb25feSA9IG9sZFBvc2l0aW9uLnkgKyAobmV3UG9zaXRpb24ueSAtIG9sZFBvc2l0aW9uLnkpICogdmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbl96ID0gb2xkUG9zaXRpb24ueiArIChuZXdQb3NpdGlvbi56IC0gb2xkUG9zaXRpb24ueikgKiB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UuY2FtZXJhLnBvc2l0aW9uLnNldChwb3NpdGlvbl94LCBwb3NpdGlvbl95LCBwb3NpdGlvbl96KTtcclxuICAgICAgICAgICAgbGV0IHJvdGF0aW9uX3ggPSBvbGRSb3RhdGlvbi54ICsgKG5ld1JvdGF0aW9uLnggLSBvbGRSb3RhdGlvbi54KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgcm90YXRpb25feSA9IG9sZFJvdGF0aW9uLnkgKyAobmV3Um90YXRpb24ueSAtIG9sZFJvdGF0aW9uLnkpICogdmFsdWU7XHJcbiAgICAgICAgICAgIGxldCByb3RhdGlvbl96ID0gb2xkUm90YXRpb24ueiArIChuZXdSb3RhdGlvbi56IC0gb2xkUm90YXRpb24ueikgKiB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpZC5lYXJ0aC5yb3RhdGlvbi5zZXQocm90YXRpb25feCwgcm90YXRpb25feSwgcm90YXRpb25feik7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgb2xkUG9zaXRpb24gPSB0aGlkLnNjZW5lU2VydmljZS5jYW1lcmEucG9zaXRpb247XHJcbiAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLmNhbWVyYUluc3BlY3QoLTAuNSwgbmV3IFRIUkVFLlZlY3RvcjMoMTAsIG9sZFBvc2l0aW9uLnksIG9sZFBvc2l0aW9uLnopLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlkLmdyb3VwLnRyYXZlcnNlKGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLnR5cGUgPT09ICdNZXNoJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbXCJnZW9tZXRyeVwiXS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtcIm1hdGVyaWFsXCJdLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLnNjZW5lLnJlbW92ZSh0aGlkLmdyb3VwKTtcclxuICAgICAgICAgICAgICAgIHRoaWQua2ZDbG91ZEFuaW1hdGUoY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGtmQ2xvdWRBbmltYXRlKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgbGV0IHRoaWQgPSB0aGlzO1xyXG4gICAgICAgIGxldCB2ZWN0b3IzID0gbmV3IFRIUkVFLlZlY3RvcjMoLTUwMDAsIC00MDAwLCAwKTtcclxuICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5jYW1lcmEubG9va0F0KHZlY3RvcjMpO1xyXG4gICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLnRhcmdldCA9IHZlY3RvcjM7XHJcbiAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2UuY29udHJvbHMubWluRGlzdGFuY2UgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLm1heERpc3RhbmNlID0gODAwMDtcclxuICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5zY2VuZS5iYWNrZ3JvdW5kID0gbmV3IENvbG9yKFwiIzMyNjY5NlwiKTtcclxuICAgICAgICBsZXQgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSg1MCwgNDUsIDMyLCAzMik7XHJcbiAgICAgICAgbGV0IHRleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpLmxvYWQoJy9pbWFnZXMvZWFydGgvY2xvdWQucG5nJyk7XHJcbiAgICAgICAgdGV4dHVyZS5tYWdGaWx0ZXIgPSBUSFJFRS5MaW5lYXJNaXBNYXBMaW5lYXJGaWx0ZXI7XHJcbiAgICAgICAgdGV4dHVyZS5taW5GaWx0ZXIgPSBUSFJFRS5MaW5lYXJNaXBNYXBMaW5lYXJGaWx0ZXI7XHJcbiAgICAgICAgbGV0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcclxuICAgICAgICAgICAgbWFwOiB0ZXh0dXJlLFxyXG4gICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcclxuICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBrZkNsb3VkR3JvdXAgPSBuZXcgR3JvdXAoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDgwMDA7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcGxhbmUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICBwbGFuZS5wb3NpdGlvbi55ID0gLU1hdGgucmFuZG9tKCkgKiAxMDAwO1xyXG4gICAgICAgICAgICBwbGFuZS5wb3NpdGlvbi54ID0gLU1hdGgucmFuZG9tKCkgKiAxMDAwO1xyXG4gICAgICAgICAgICBwbGFuZS5wb3NpdGlvbi56ID0gaSAlIDIgPT09IDAgPyBNYXRoLnJhbmRvbSgpICogNTAwIDogLU1hdGgucmFuZG9tKCkgKiA1MDA7XHJcbiAgICAgICAgICAgIHBsYW5lLnJvdGF0aW9uLnkgPSBNYXRoLlBJIC8gMjtcclxuICAgICAgICAgICAgcGxhbmUuc2NhbGUueiA9IHBsYW5lLnNjYWxlLnkgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5yYW5kb20oKSAqIDEuNSArIDAuNTtcclxuICAgICAgICAgICAga2ZDbG91ZEdyb3VwLmFkZChwbGFuZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLnNjZW5lLmFkZChrZkNsb3VkR3JvdXApO1xyXG4gICAgICAgIHdpbmRvd1tcImtmQ2xvdWRHcm91cFwiXSA9IGtmQ2xvdWRHcm91cDtcclxuICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5jYW1lcmFJbnNwZWN0KC0xMCwgbmV3IFRIUkVFLlZlY3RvcjMoLTU1MCwgLTU1MCwgMCksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAga2ZDbG91ZEdyb3VwLnRyYXZlcnNlKGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmoudHlwZSA9PT0gJ01lc2gnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqW1wiZ2VvbWV0cnlcIl0uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9ialtcIm1hdGVyaWFsXCJdLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLnNjZW5lLnJlbW92ZShrZkNsb3VkR3JvdXApO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvZGVMb2FkZXJTZXJ2aWNlIH0gZnJvbSBcIi4vbG9hZGVyL0NvZGVMb2FkZXJTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tIFwiLi4vdXRpbC9Db21tb25VdGlsXCI7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyBDU1MyRE9iamVjdCB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vcmVuZGVyZXJzL0NTUzJEUmVuZGVyZXJcIjtcclxuaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCB7IENTUzNET2JqZWN0IH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9yZW5kZXJlcnMvQ1NTM0RSZW5kZXJlclwiO1xyXG5pbXBvcnQgeyBPQkpMb2FkZXJTZXJ2aWNlIH0gZnJvbSBcIi4vbG9hZGVyL09CSkxvYWRlclNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRkJYTG9hZGVyU2VydmljZSB9IGZyb20gXCIuL2xvYWRlci9GQlhMb2FkZXJTZXJ2aWNlXCI7XHJcbmV4cG9ydCBjbGFzcyBQYXJya1NlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2UgPSBzY2VuZVNlcnZpY2U7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVTY2VuZSgpIHtcclxuICAgICAgICBsZXQgcGF0aCA9IFwiL2ltYWdlcy9za3lib3gvXCI7XHJcbiAgICAgICAgbGV0IGZvcm1hdCA9ICcuanBnJztcclxuICAgICAgICBsZXQgdXJscyA9IFtcclxuICAgICAgICAgICAgcGF0aCArICdweCcgKyBmb3JtYXQsIHBhdGggKyAnbngnICsgZm9ybWF0LFxyXG4gICAgICAgICAgICBwYXRoICsgJ3B5JyArIGZvcm1hdCwgcGF0aCArICdueScgKyBmb3JtYXQsXHJcbiAgICAgICAgICAgIHBhdGggKyAncHonICsgZm9ybWF0LCBwYXRoICsgJ256JyArIGZvcm1hdFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2Uuc2NlbmUuYmFja2dyb3VuZCA9IG5ldyBUSFJFRS5DdWJlVGV4dHVyZUxvYWRlcigpLmxvYWQodXJscyk7XHJcbiAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2UuY2FtZXJhLnBvc2l0aW9uLnNldCg1MDAsIDUwMCwgNTAwKTtcclxuICAgICAgICB0aGlzLnNjZW5lU2VydmljZS5jYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApKTtcclxuICAgICAgICB0aGlzLnNjZW5lU2VydmljZS5jb250cm9scy50YXJnZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnNjZW5lU2VydmljZS5jb250cm9scy5lbmFibGVQYW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLmVuYWJsZUtleXMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJICogMC41O1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLm1pbkRpc3RhbmNlID0gMTAwO1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLm1heERpc3RhbmNlID0gNTAwMDtcclxuICAgIH1cclxuICAgIGxvYWRQYXJyaygpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNjZW5lKCk7XHJcbiAgICAgICAgbGV0IHRoaWQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBncm91bmRUZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKFwiL2ltYWdlcy9taW5lY3JhZnQvZ3Jhc3NsaWdodC1iaWcuanBnXCIpO1xyXG4gICAgICAgIGdyb3VuZFRleHR1cmUud3JhcFMgPSBncm91bmRUZXh0dXJlLndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcbiAgICAgICAgZ3JvdW5kVGV4dHVyZS5yZXBlYXQuc2V0KDI1LCAyNSk7XHJcbiAgICAgICAgZ3JvdW5kVGV4dHVyZS5hbmlzb3Ryb3B5ID0gMTY7XHJcbiAgICAgICAgbGV0IGdyb3VuZE1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoeyBtYXA6IGdyb3VuZFRleHR1cmUgfSk7XHJcbiAgICAgICAgbGV0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSgyMDAwMCwgMjAwMDApLCBncm91bmRNYXRlcmlhbCk7XHJcbiAgICAgICAgbWVzaC5yb3RhdGlvbi54ID0gLU1hdGguUEkgLyAyO1xyXG4gICAgICAgIG1lc2gucmVjZWl2ZVNoYWRvdyA9IHRydWU7XHJcbiAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2Uuc2NlbmUuYWRkKG1lc2gpO1xyXG4gICAgICAgIGxldCBjb2RlTG9hZGVyU2VydmljZSA9IG5ldyBDb2RlTG9hZGVyU2VydmljZSh0aGlkLnNjZW5lU2VydmljZSk7XHJcbiAgICAgICAgY29kZUxvYWRlclNlcnZpY2UubG9hZENvZGUoNzAsIDcwLCA3MCwgZnVuY3Rpb24gKG1lc2gpIHtcclxuICAgICAgICAgICAgbWVzaC5wb3NpdGlvbi5zZXQoLTEwMCwgMTAwLCAwKTtcclxuICAgICAgICAgICAgbWVzaC5jYXN0U2hhZG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgbWVzaC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UuYWRkRXZlbnRMaXN0ZW5lcihtZXNoLCBcImNsaWNrXCIsIGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi56uL5pa55L2T5a+56LGh6KKr6byg5qCH54K55Ye7XCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9sZExvb2tBdCA9IHRoaWQuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLnRhcmdldDtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdMb29rQXQgPSBvYmplY3QucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBpZiAoIUNvbW1vblV0aWwub2JqSXNFcXVhbChvbGRMb29rQXQsIG5ld0xvb2tBdCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5teUFuaW1hdGUoMiwgZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb29rQXRfeCA9IG9sZExvb2tBdC54ICsgKG5ld0xvb2tBdC54IC0gb2xkTG9va0F0LngpICogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb29rQXRfeSA9IG9sZExvb2tBdC55ICsgKG5ld0xvb2tBdC55IC0gb2xkTG9va0F0LnkpICogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb29rQXRfeiA9IG9sZExvb2tBdC56ICsgKG5ld0xvb2tBdC56IC0gb2xkTG9va0F0LnopICogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2ZWN0b3IzID0gbmV3IFRIUkVFLlZlY3RvcjMobG9va0F0X3gsIGxvb2tBdF95LCBsb29rQXRfeik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLmNhbWVyYS5sb29rQXQodmVjdG9yMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLnRhcmdldCA9IHZlY3RvcjM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2xkUG9zaXRpb24gPSB0aGlkLnNjZW5lU2VydmljZS5jYW1lcmEucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IG9iamVjdC5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UubXlBbmltYXRlKDIsIGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhbWVyYUJhY2tEaXN0X3ggPSA4MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FtZXJhQmFja0Rpc3RfeSA9IDMwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYW1lcmFCYWNrRGlzdF96ID0gODAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uX3ggPSBvbGRQb3NpdGlvbi54ICsgKG5ld1Bvc2l0aW9uLnggKyBjYW1lcmFCYWNrRGlzdF94IC0gb2xkUG9zaXRpb24ueCkgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbl95ID0gb2xkUG9zaXRpb24ueSArIChuZXdQb3NpdGlvbi55ICsgY2FtZXJhQmFja0Rpc3RfeSAtIG9sZFBvc2l0aW9uLnkpICogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb25feiA9IG9sZFBvc2l0aW9uLnogKyAobmV3UG9zaXRpb24ueiArIGNhbWVyYUJhY2tEaXN0X3ogLSBvbGRQb3NpdGlvbi56KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UuY2FtZXJhLnBvc2l0aW9uLnNldChwb3NpdGlvbl94LCBwb3NpdGlvbl95LCBwb3NpdGlvbl96KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWKqOeUu+aSreaUvuWujOavlVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJlbGVtZW50XFxcIj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPVxcXCJudW1iZXJcXFwiPue8luWPt++8mjAwMTwvZGl2PlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9XFxcInN5bWJvbFxcXCI+56uL5pa55L2TPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPGRpdiBjbGFzcz1cXFwiZGV0YWlsc1xcXCI+5pmu6YCa55qE56uL5pa55L2T77yMMkTnmoRsYWJlbDwvZGl2PlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjwvZGl2PlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNTUzJET2JqZWN0ID0gbmV3IENTUzJET2JqZWN0KCQoaHRtbClbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY1NTMkRPYmplY3QubmFtZSA9IFwiMmRMYWJlbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY1NTMkRPYmplY3QucG9zaXRpb24ueSA9IDEyMCAvIDIgKyA3MCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QucmVtb3ZlKG9iamVjdC5nZXRPYmplY3RCeU5hbWUoXCIyZExhYmVsXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5hZGQoY1NTMkRPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29kZUxvYWRlclNlcnZpY2UubG9hZENvZGUoNzAsIDcwLCA3MCwgZnVuY3Rpb24gKG1lc2gpIHtcclxuICAgICAgICAgICAgbWVzaC5wb3NpdGlvbi5zZXQoMTAwLCAxMDAsIDApO1xyXG4gICAgICAgICAgICBtZXNoLmNhc3RTaGFkb3cgPSB0cnVlO1xyXG4gICAgICAgICAgICBtZXNoLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5hZGRFdmVudExpc3RlbmVyKG1lc2gsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLnq4vmlrnkvZPlr7nosaHooqvpvKDmoIfngrnlh7tcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2xkTG9va0F0ID0gdGhpZC5zY2VuZVNlcnZpY2UuY29udHJvbHMudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0xvb2tBdCA9IG9iamVjdC5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIGlmICghQ29tbW9uVXRpbC5vYmpJc0VxdWFsKG9sZExvb2tBdCwgbmV3TG9va0F0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLm15QW5pbWF0ZSgyLCBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvb2tBdF94ID0gb2xkTG9va0F0LnggKyAobmV3TG9va0F0LnggLSBvbGRMb29rQXQueCkgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvb2tBdF95ID0gb2xkTG9va0F0LnkgKyAobmV3TG9va0F0LnkgLSBvbGRMb29rQXQueSkgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvb2tBdF96ID0gb2xkTG9va0F0LnogKyAobmV3TG9va0F0LnogLSBvbGRMb29rQXQueikgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZlY3RvcjMgPSBuZXcgVEhSRUUuVmVjdG9yMyhsb29rQXRfeCwgbG9va0F0X3ksIGxvb2tBdF96KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UuY2FtZXJhLmxvb2tBdCh2ZWN0b3IzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UuY29udHJvbHMudGFyZ2V0ID0gdmVjdG9yMztcclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvbGRQb3NpdGlvbiA9IHRoaWQuc2NlbmVTZXJ2aWNlLmNhbWVyYS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gb2JqZWN0LnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5teUFuaW1hdGUoMiwgZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FtZXJhQmFja0Rpc3RfeCA9IDgwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYW1lcmFCYWNrRGlzdF95ID0gMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhbWVyYUJhY2tEaXN0X3ogPSA4MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb25feCA9IG9sZFBvc2l0aW9uLnggKyAobmV3UG9zaXRpb24ueCArIGNhbWVyYUJhY2tEaXN0X3ggLSBvbGRQb3NpdGlvbi54KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uX3kgPSBvbGRQb3NpdGlvbi55ICsgKG5ld1Bvc2l0aW9uLnkgKyBjYW1lcmFCYWNrRGlzdF95IC0gb2xkUG9zaXRpb24ueSkgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbl96ID0gb2xkUG9zaXRpb24ueiArIChuZXdQb3NpdGlvbi56ICsgY2FtZXJhQmFja0Rpc3RfeiAtIG9sZFBvc2l0aW9uLnopICogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5jYW1lcmEucG9zaXRpb24uc2V0KHBvc2l0aW9uX3gsIHBvc2l0aW9uX3ksIHBvc2l0aW9uX3opO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UuY29udHJvbHMudXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yqo55S75pKt5pS+5a6M5q+VXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGh0bWwgPSBcIjxkaXYgY2xhc3M9XFxcImVsZW1lbnRcXFwiPlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9XFxcIm51bWJlclxcXCI+57yW5Y+377yaMDAyPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPGRpdiBjbGFzcz1cXFwic3ltYm9sXFxcIj7nq4vmlrnkvZM8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPVxcXCJkZXRhaWxzXFxcIj7mma7pgJrnmoTnq4vmlrnkvZPvvIwzROeahGxhYmVsPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPC9kaXY+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY1NTM0RPYmplY3QgPSBuZXcgQ1NTM0RPYmplY3QoJChodG1sKVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjU1MzRE9iamVjdC5uYW1lID0gXCIzZExhYmVsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjU1MzRE9iamVjdC5wb3NpdGlvbi55ID0gMTIwIC8gMiArIDcwIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5yZW1vdmUob2JqZWN0LmdldE9iamVjdEJ5TmFtZShcIjNkTGFiZWxcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmFkZChjU1MzRE9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgb2JqTG9hZGVyU2VydmljZSA9IG5ldyBPQkpMb2FkZXJTZXJ2aWNlKHRoaWQuc2NlbmVTZXJ2aWNlKTtcclxuICAgICAgICBvYmpMb2FkZXJTZXJ2aWNlLmxvYWRPYmooXCIvbW9kZWxzL29iai9tYWxlMDIvbWFsZTAyXCIsIGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICAgICAgb2JqZWN0LnBvc2l0aW9uLnNldCgzMDAsIDAsIDApO1xyXG4gICAgICAgICAgICBvYmplY3QuY2FzdFNoYWRvdyA9IHRydWU7XHJcbiAgICAgICAgICAgIG9iamVjdC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UuYWRkRXZlbnRMaXN0ZW5lcihvYmplY3QsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLnlLfkurrooqvpvKDmoIfngrnlh7tcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2xkTG9va0F0ID0gdGhpZC5zY2VuZVNlcnZpY2UuY29udHJvbHMudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0xvb2tBdCA9IG9iamVjdC5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIGlmICghQ29tbW9uVXRpbC5vYmpJc0VxdWFsKG9sZExvb2tBdCwgbmV3TG9va0F0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLm15QW5pbWF0ZSgyLCBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvb2tBdF94ID0gb2xkTG9va0F0LnggKyAobmV3TG9va0F0LnggLSBvbGRMb29rQXQueCkgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvb2tBdF95ID0gb2xkTG9va0F0LnkgKyAobmV3TG9va0F0LnkgLSBvbGRMb29rQXQueSkgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvb2tBdF96ID0gb2xkTG9va0F0LnogKyAobmV3TG9va0F0LnogLSBvbGRMb29rQXQueikgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZlY3RvcjMgPSBuZXcgVEhSRUUuVmVjdG9yMyhsb29rQXRfeCwgbG9va0F0X3ksIGxvb2tBdF96KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UuY2FtZXJhLmxvb2tBdCh2ZWN0b3IzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UuY29udHJvbHMudGFyZ2V0ID0gdmVjdG9yMztcclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvbGRQb3NpdGlvbiA9IHRoaWQuc2NlbmVTZXJ2aWNlLmNhbWVyYS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gb2JqZWN0LnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5teUFuaW1hdGUoMiwgZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FtZXJhQmFja0Rpc3RfeCA9IDgwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYW1lcmFCYWNrRGlzdF95ID0gMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhbWVyYUJhY2tEaXN0X3ogPSA4MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb25feCA9IG9sZFBvc2l0aW9uLnggKyAobmV3UG9zaXRpb24ueCArIGNhbWVyYUJhY2tEaXN0X3ggLSBvbGRQb3NpdGlvbi54KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uX3kgPSBvbGRQb3NpdGlvbi55ICsgKG5ld1Bvc2l0aW9uLnkgKyBjYW1lcmFCYWNrRGlzdF95IC0gb2xkUG9zaXRpb24ueSkgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbl96ID0gb2xkUG9zaXRpb24ueiArIChuZXdQb3NpdGlvbi56ICsgY2FtZXJhQmFja0Rpc3RfeiAtIG9sZFBvc2l0aW9uLnopICogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5jYW1lcmEucG9zaXRpb24uc2V0KHBvc2l0aW9uX3gsIHBvc2l0aW9uX3ksIHBvc2l0aW9uX3opO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UuY29udHJvbHMudXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yqo55S75pKt5pS+5a6M5q+VXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGh0bWwgPSBcIjxkaXYgY2xhc3M9XFxcImVsZW1lbnRcXFwiPlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9XFxcIm51bWJlclxcXCI+57yW5Y+377yaMDAxPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPGRpdiBjbGFzcz1cXFwic3ltYm9sXFxcIj7nlLfkuro8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPVxcXCJkZXRhaWxzXFxcIj7nq5nnq4vnmoTnlLfkurrvvIwzROeahGxhYmVsPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPC9kaXY+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY1NTM0RPYmplY3QgPSBuZXcgQ1NTM0RPYmplY3QoJChodG1sKVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjU1MzRE9iamVjdC5uYW1lID0gXCIzZExhYmVsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjU1MzRE9iamVjdC5wb3NpdGlvbi55ID0gMTIwIC8gMiArIDcwIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5yZW1vdmUob2JqZWN0LmdldE9iamVjdEJ5TmFtZShcIjNkTGFiZWxcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmFkZChjU1MzRE9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgZmJ4TG9hZGVyU2VydmljZSA9IG5ldyBGQlhMb2FkZXJTZXJ2aWNlKHRoaWQuc2NlbmVTZXJ2aWNlKTtcclxuICAgICAgICBmYnhMb2FkZXJTZXJ2aWNlLmxvYWRGYngoXCIvbW9kZWxzL2ZieC9zYW1iYV9kYW5jaW5nL1NhbWJhIERhbmNpbmdcIiwgZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgICAgICBvYmplY3QucG9zaXRpb24uc2V0KC0zMDAsIDAsIDApO1xyXG4gICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5zY2VuZS5hZGQobmV3IFRIUkVFLlNrZWxldG9uSGVscGVyKG9iamVjdCkpO1xyXG4gICAgICAgICAgICBvYmplY3QudHJhdmVyc2UoZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5jYXN0U2hhZG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGV0IGNsb2NrID0gbmV3IFRIUkVFLkNsb2NrKCk7XHJcbiAgICAgICAgICAgIGxldCBtaXhlciA9IG5ldyBUSFJFRS5BbmltYXRpb25NaXhlcihvYmplY3QpO1xyXG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gbWl4ZXIuY2xpcEFjdGlvbihvYmplY3QuYW5pbWF0aW9uc1swXSk7XHJcbiAgICAgICAgICAgIGFjdGlvbi5wbGF5KCk7XHJcbiAgICAgICAgICAgIGFuaW1hdGUoKTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcclxuICAgICAgICAgICAgICAgIG1peGVyLnVwZGF0ZShjbG9jay5nZXREZWx0YSgpKTtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5hZGRFdmVudExpc3RlbmVyKG9iamVjdCwgXCJjbGlja1wiLCBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWls+S6uuiiq+m8oOagh+eCueWHu1wiKTtcclxuICAgICAgICAgICAgICAgIGxldCBvbGRMb29rQXQgPSB0aGlkLnNjZW5lU2VydmljZS5jb250cm9scy50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3TG9va0F0ID0gb2JqZWN0LnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFDb21tb25VdGlsLm9iaklzRXF1YWwob2xkTG9va0F0LCBuZXdMb29rQXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UubXlBbmltYXRlKDIsIGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9va0F0X3ggPSBvbGRMb29rQXQueCArIChuZXdMb29rQXQueCAtIG9sZExvb2tBdC54KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9va0F0X3kgPSBvbGRMb29rQXQueSArIChuZXdMb29rQXQueSAtIG9sZExvb2tBdC55KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9va0F0X3ogPSBvbGRMb29rQXQueiArIChuZXdMb29rQXQueiAtIG9sZExvb2tBdC56KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmVjdG9yMyA9IG5ldyBUSFJFRS5WZWN0b3IzKGxvb2tBdF94LCBsb29rQXRfeSwgbG9va0F0X3opO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5jYW1lcmEubG9va0F0KHZlY3RvcjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5jb250cm9scy50YXJnZXQgPSB2ZWN0b3IzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9sZFBvc2l0aW9uID0gdGhpZC5zY2VuZVNlcnZpY2UuY2FtZXJhLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSBvYmplY3QucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLm15QW5pbWF0ZSgyLCBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYW1lcmFCYWNrRGlzdF94ID0gODAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhbWVyYUJhY2tEaXN0X3kgPSAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FtZXJhQmFja0Rpc3RfeiA9IDgwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbl94ID0gb2xkUG9zaXRpb24ueCArIChuZXdQb3NpdGlvbi54ICsgY2FtZXJhQmFja0Rpc3RfeCAtIG9sZFBvc2l0aW9uLngpICogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb25feSA9IG9sZFBvc2l0aW9uLnkgKyAobmV3UG9zaXRpb24ueSArIGNhbWVyYUJhY2tEaXN0X3kgLSBvbGRQb3NpdGlvbi55KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uX3ogPSBvbGRQb3NpdGlvbi56ICsgKG5ld1Bvc2l0aW9uLnogKyBjYW1lcmFCYWNrRGlzdF96IC0gb2xkUG9zaXRpb24ueikgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLmNhbWVyYS5wb3NpdGlvbi5zZXQocG9zaXRpb25feCwgcG9zaXRpb25feSwgcG9zaXRpb25feik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5jb250cm9scy51cGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLliqjnlLvmkq3mlL7lrozmr5VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaHRtbCA9IFwiPGRpdiBjbGFzcz1cXFwiZWxlbWVudFxcXCI+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPGRpdiBjbGFzcz1cXFwibnVtYmVyXFxcIj7nvJblj7fvvJowMDE8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPVxcXCJzeW1ib2xcXFwiPuWls+S6ujwvZGl2PlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9XFxcImRldGFpbHNcXFwiPui3s+iInueahOWls+S6uu+8jDNE55qEbGFiZWw8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8L2Rpdj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjU1MzRE9iamVjdCA9IG5ldyBDU1MzRE9iamVjdCgkKGh0bWwpWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNTUzNET2JqZWN0Lm5hbWUgPSBcIjNkTGFiZWxcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNTUzNET2JqZWN0LnBvc2l0aW9uLnkgPSAxMjAgLyAyICsgNzAgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnJlbW92ZShvYmplY3QuZ2V0T2JqZWN0QnlOYW1lKFwiM2RMYWJlbFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QuYWRkKGNTUzNET2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzXCI7XHJcbmltcG9ydCB7IENTUzJEUmVuZGVyZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3JlbmRlcmVycy9DU1MyRFJlbmRlcmVyXCI7XHJcbmltcG9ydCB7IENTUzNEUmVuZGVyZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3JlbmRlcmVycy9DU1MzRFJlbmRlcmVyXCI7XHJcbmV4cG9ydCBjbGFzcyBTY2VuZVNlcnZpY2Uge1xyXG4gICAgaW5pdFNjZW5lKCkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuICAgICAgICB0aGlzLnBlcnNwZWN0aXZlQ2FtZXJhKCk7XHJcbiAgICAgICAgdGhpcy53ZWJHTFJlbmRlcmVyKCk7XHJcbiAgICAgICAgdGhpcy5jU1MyRFJlbmRlcmVyRnVuKCk7XHJcbiAgICAgICAgdGhpcy5jU1MzRFJlbmRlcmVyRnVuKCk7XHJcbiAgICAgICAgdGhpcy5vcmJpdENvbnRyb2xzKCk7XHJcbiAgICAgICAgdGhpcy5saWdodCgpO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICBiYWNrZ3JvdW5kKCkge1xyXG4gICAgfVxyXG4gICAgb3JiaXRDb250cm9scygpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHModGhpcy5jYW1lcmEsIHRoaXMuY1NTM0RSZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbHMudGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICB9XHJcbiAgICB3ZWJHTFJlbmRlcmVyKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IGFudGlhbGlhczogdHJ1ZSwgbG9nYXJpdGhtaWNEZXB0aEJ1ZmZlcjogdHJ1ZSB9KTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgY1NTMkRSZW5kZXJlckZ1bigpIHtcclxuICAgICAgICB0aGlzLmNTUzJEUmVuZGVyZXIgPSBuZXcgQ1NTMkRSZW5kZXJlcigpO1xyXG4gICAgICAgIHRoaXMuY1NTMkRSZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY1NTMkRSZW5kZXJlci5kb21FbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICB0aGlzLmNTUzJEUmVuZGVyZXIuZG9tRWxlbWVudC5zdHlsZS50b3AgPSBcIjBcIjtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY1NTMkRSZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgIH1cclxuICAgIGNTUzNEUmVuZGVyZXJGdW4oKSB7XHJcbiAgICAgICAgdGhpcy5jU1MzRFJlbmRlcmVyID0gbmV3IENTUzNEUmVuZGVyZXIoKTtcclxuICAgICAgICB0aGlzLmNTUzNEUmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmNTUzNEUmVuZGVyZXIuZG9tRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgdGhpcy5jU1MzRFJlbmRlcmVyLmRvbUVsZW1lbnQuc3R5bGUudG9wID0gXCIwXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNTUzNEUmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBwZXJzcGVjdGl2ZUNhbWVyYSgpIHtcclxuICAgICAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSgzMCwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDEsIDEwMDAwKTtcclxuICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApKTtcclxuICAgIH1cclxuICAgIGxpZ2h0KCkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhkZmViZmYsIDAuMykpO1xyXG4gICAgICAgIGxldCBkaXJlY3Rpb25hbExpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYpO1xyXG4gICAgICAgIGRpcmVjdGlvbmFsTGlnaHQucG9zaXRpb24uc2V0KDAsIDUwMDAsIDUwMDApO1xyXG4gICAgICAgIGRpcmVjdGlvbmFsTGlnaHQuY2FzdFNoYWRvdyA9IHRydWU7XHJcbiAgICAgICAgZGlyZWN0aW9uYWxMaWdodC5uYW1lID0gXCJiYXNpc0RpcmVjdGlvbmFsTGlnaHRcIjtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZChkaXJlY3Rpb25hbExpZ2h0KTtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZChuZXcgVEhSRUUuQ2FtZXJhSGVscGVyKGRpcmVjdGlvbmFsTGlnaHQuc2hhZG93LmNhbWVyYSkpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcclxuICAgICAgICB0aGlzLmNTUzJEUmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcclxuICAgICAgICB0aGlzLmNTUzNEUmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xzLnVwZGF0ZSgpO1xyXG4gICAgICAgIGxldCB0aGlkID0gdGhpcztcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlkLnJlbmRlcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25XaW5kb3dSZXNpemUoKSB7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmNTUzJEUmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmNTUzNEUmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgIH1cclxuICAgIGFkZEV2ZW50TGlzdGVuZXIobGlzdGVuZXJPYmosIGV2ZW4sIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgbGV0IHRoaWQgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY1NTM0RSZW5kZXJlci5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGxldCByYXljYXN0ZXIgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKCk7XHJcbiAgICAgICAgICAgIGxldCBtb3VzZSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XHJcbiAgICAgICAgICAgIG1vdXNlLnggPSAoZXZlbnRbXCJjbGllbnRYXCJdIC8gdGhpZC5jU1MzRFJlbmRlcmVyLmRvbUVsZW1lbnQuY2xpZW50V2lkdGgpICogMiAtIDE7XHJcbiAgICAgICAgICAgIG1vdXNlLnkgPSAtKGV2ZW50W1wiY2xpZW50WVwiXSAvIHRoaWQuY1NTM0RSZW5kZXJlci5kb21FbGVtZW50LmNsaWVudEhlaWdodCkgKiAyICsgMTtcclxuICAgICAgICAgICAgcmF5Y2FzdGVyLnNldEZyb21DYW1lcmEobW91c2UsIHRoaWQuY2FtZXJhKTtcclxuICAgICAgICAgICAgbGV0IGludGVyc2VjdHM7XHJcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lck9iai50eXBlID09IFwiTWVzaFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpbnRlcnNlY3RzID0gcmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdHMoW2xpc3RlbmVyT2JqXSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaW50ZXJzZWN0cyA9IHJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKGxpc3RlbmVyT2JqLmNoaWxkcmVuLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW50ZXJzZWN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobGlzdGVuZXJPYmopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgbXlBbmltYXRlKGxldmVsLCBvblVwZGF0ZSwgY2FsbGJhY2spIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSAwO1xyXG4gICAgICAgIGxldCBfdmFsdWUgPSAwLjAxICogbGV2ZWw7XHJcbiAgICAgICAgYW5pbWF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZSh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAob25VcGRhdGUpXHJcbiAgICAgICAgICAgICAgICBvblVwZGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSArPSBfdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZS50b0ZpeGVkKDIpKTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhbWVyYUluc3BlY3QodmFsdWUsIHBvc2l0aW9uLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGxldCB0aGlkID0gdGhpcztcclxuICAgICAgICBsZXQgZmxhZyA9IHZhbHVlID49IDA7XHJcbiAgICAgICAgY2FtZXJhSW5zcGVjdEFuaW1hdGUoKTtcclxuICAgICAgICBmdW5jdGlvbiBjYW1lcmFJbnNwZWN0QW5pbWF0ZSgpIHtcclxuICAgICAgICAgICAgaWYgKGZsYWcpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlkLmNhbWVyYS5wb3NpdGlvbi54IDwgcG9zaXRpb25bXCJ4XCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpZC5jYW1lcmEucG9zaXRpb24ueCArPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlkLmNhbWVyYS5wb3NpdGlvbi55IDwgcG9zaXRpb25bXCJ5XCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpZC5jYW1lcmEucG9zaXRpb24ueSArPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlkLmNhbWVyYS5wb3NpdGlvbi56IDwgcG9zaXRpb25bXCJ6XCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpZC5jYW1lcmEucG9zaXRpb24ueiArPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlkLmNhbWVyYS5wb3NpdGlvbi54ID4gcG9zaXRpb25bXCJ4XCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpZC5jYW1lcmEucG9zaXRpb24ueCArPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlkLmNhbWVyYS5wb3NpdGlvbi55ID4gcG9zaXRpb25bXCJ5XCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpZC5jYW1lcmEucG9zaXRpb24ueSArPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlkLmNhbWVyYS5wb3NpdGlvbi56ID4gcG9zaXRpb25bXCJ6XCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpZC5jYW1lcmEucG9zaXRpb24ueiArPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZsYWcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpZC5jYW1lcmEucG9zaXRpb24ueCA+PSBwb3NpdGlvbltcInhcIl0gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpZC5jYW1lcmEucG9zaXRpb24ueSA+PSBwb3NpdGlvbltcInlcIl0gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpZC5jYW1lcmEucG9zaXRpb24ueiA+PSBwb3NpdGlvbltcInpcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlkLmNhbWVyYS5wb3NpdGlvbi54IDw9IHBvc2l0aW9uW1wieFwiXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlkLmNhbWVyYS5wb3NpdGlvbi55IDw9IHBvc2l0aW9uW1wieVwiXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlkLmNhbWVyYS5wb3NpdGlvbi56IDw9IHBvc2l0aW9uW1wielwiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FtZXJhSW5zcGVjdEFuaW1hdGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuZXhwb3J0IGNsYXNzIENvZGVMb2FkZXJTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlID0gc2NlbmVTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgbG9hZENvZGUod2lkdGgsIGhlaWdodCwgZGVwdGgsIG9uTG9hZCkge1xyXG4gICAgICAgIGxldCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3aWR0aCwgaGVpZ2h0LCBkZXB0aCk7XHJcbiAgICAgICAgZ2VvbWV0cnlbd2lkdGhdID0gd2lkdGg7XHJcbiAgICAgICAgZ2VvbWV0cnlbaGVpZ2h0XSA9IGhlaWdodDtcclxuICAgICAgICBnZW9tZXRyeVtkZXB0aF0gPSBkZXB0aDtcclxuICAgICAgICBsZXQgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoKTtcclxuICAgICAgICBsZXQgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcbiAgICAgICAgaWYgKG9uTG9hZClcclxuICAgICAgICAgICAgb25Mb2FkKG1lc2gpO1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLnNjZW5lLmFkZChtZXNoKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGUobWVzaCk7XHJcbiAgICB9XHJcbiAgICBhbmltYXRlKG1lc2gpIHtcclxuICAgICAgICBtZXNoLnJvdGF0aW9uLnkgKz0gMC4wMjtcclxuICAgICAgICBsZXQgdGhpZCA9IHRoaXM7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpZC5hbmltYXRlKG1lc2gpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuaW1wb3J0IHsgRkJYTG9hZGVyIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0ZCWExvYWRlclwiO1xyXG5pbXBvcnQgeyBUR0FMb2FkZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvVEdBTG9hZGVyXCI7XHJcbmltcG9ydCB7IEREU0xvYWRlciB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9ERFNMb2FkZXJcIjtcclxuZXhwb3J0IGNsYXNzIEZCWExvYWRlclNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2UgPSBzY2VuZVNlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBsb2FkRmJ4KHVybCwgb25Mb2FkKSB7XHJcbiAgICAgICAgbGV0IHRoaWQgPSB0aGlzO1xyXG4gICAgICAgIFRIUkVFLkxvYWRlci5IYW5kbGVycy5hZGQoL1xcLnRnYSQvaSwgbmV3IFRHQUxvYWRlcigpKTtcclxuICAgICAgICBUSFJFRS5Mb2FkZXIuSGFuZGxlcnMuYWRkKC9cXC5kZHMkL2ksIG5ldyBERFNMb2FkZXIoKSk7XHJcbiAgICAgICAgbmV3IEZCWExvYWRlcigpLmxvYWQodXJsICsgXCIuZmJ4XCIsIGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKG9uTG9hZClcclxuICAgICAgICAgICAgICAgIG9uTG9hZChvYmplY3QpO1xyXG4gICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5zY2VuZS5hZGQob2JqZWN0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcbmltcG9ydCB7IE1UTExvYWRlciB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9NVExMb2FkZXJcIjtcclxuaW1wb3J0IHsgT0JKTG9hZGVyIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL09CSkxvYWRlclwiO1xyXG5pbXBvcnQgeyBUR0FMb2FkZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvVEdBTG9hZGVyXCI7XHJcbmltcG9ydCB7IEREU0xvYWRlciB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9ERFNMb2FkZXJcIjtcclxuZXhwb3J0IGNsYXNzIE9CSkxvYWRlclNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2UgPSBzY2VuZVNlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBsb2FkT2JqKHVybCwgb25Mb2FkKSB7XHJcbiAgICAgICAgbGV0IHRoaWQgPSB0aGlzO1xyXG4gICAgICAgIFRIUkVFLkxvYWRlci5IYW5kbGVycy5hZGQoL1xcLnRnYSQvaSwgbmV3IFRHQUxvYWRlcigpKTtcclxuICAgICAgICBUSFJFRS5Mb2FkZXIuSGFuZGxlcnMuYWRkKC9cXC5kZHMkL2ksIG5ldyBERFNMb2FkZXIoKSk7XHJcbiAgICAgICAgbmV3IE1UTExvYWRlcigpLmxvYWQodXJsICsgJy5tdGwnLCBmdW5jdGlvbiAobWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgICAgIG1hdGVyaWFscy5wcmVsb2FkKCk7XHJcbiAgICAgICAgICAgIGxldCBvYmpMb2FkZXIgPSBuZXcgT0JKTG9hZGVyKCk7XHJcbiAgICAgICAgICAgIG9iakxvYWRlci5zZXRNYXRlcmlhbHMobWF0ZXJpYWxzKTtcclxuICAgICAgICAgICAgb2JqTG9hZGVyLmxvYWQodXJsICsgJy5vYmonLCBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob25Mb2FkKVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTG9hZChvYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2Uuc2NlbmUuYWRkKG9iamVjdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBDb21tb25VdGlsIHtcclxuICAgIHN0YXRpYyBvYmpJc0VxdWFsKG9iajEsIG9iajIpIHtcclxuICAgICAgICBsZXQgbzEgPSBvYmoxIGluc3RhbmNlb2YgT2JqZWN0O1xyXG4gICAgICAgIGxldCBvMiA9IG9iajIgaW5zdGFuY2VvZiBPYmplY3Q7XHJcbiAgICAgICAgaWYgKCFvMSB8fCAhbzIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9iajEgPT09IG9iajI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhvYmoxKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKG9iajIpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGF0dHIgaW4gb2JqMSkge1xyXG4gICAgICAgICAgICBsZXQgdDEgPSBvYmoxW2F0dHJdIGluc3RhbmNlb2YgT2JqZWN0O1xyXG4gICAgICAgICAgICBsZXQgdDIgPSBvYmoyW2F0dHJdIGluc3RhbmNlb2YgT2JqZWN0O1xyXG4gICAgICAgICAgICBpZiAodDEgJiYgdDIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9iaklzRXF1YWwob2JqMVthdHRyXSwgb2JqMlthdHRyXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAob2JqMVthdHRyXSAhPT0gb2JqMlthdHRyXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=