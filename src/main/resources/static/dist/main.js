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
        this.sceneService.camera.position.set(80, 0, 0);
        let vector3 = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, 0);
        this.sceneService.camera.lookAt(vector3);
        this.sceneService.controls.target = vector3;
        this.sceneService.controls.enableZoom = true;
        this.sceneService.controls.enableRotate = true;
        this.sceneService.controls.enablePan = false;
        this.sceneService.controls.enableKeys = false;
        this.sceneService.controls.maxPolarAngle = Math.PI;
        this.sceneService.controls.minDistance = 10;
        this.sceneService.controls.maxDistance = 80;
        this.earthRotatesSteadilyCameraPosition = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](40, 0, 0);
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
        thid.sceneService.cameraInspect(-0.5, new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](thid.earthRotatesSteadilyCameraPosition.x, thid.earthRotatesSteadilyCameraPosition.y, thid.earthRotatesSteadilyCameraPosition.z), function () {
            thid.autoRotationAnimatePlay();
        });
    }
    autoRotationAnimatePlay() {
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
        let thid = this;
        this.requestAnimationFrameFlag = requestAnimationFrame(function () {
            thid.autoRotationAnimatePlay();
        });
    }
    dblclickEarth(callback) {
        let thid = this;
        thid.sceneService.controls.enableZoom = false;
        thid.sceneService.controls.enableRotate = false;
        thid.sceneService.controls.enablePan = false;
        thid.sceneService.controls.enableKeys = false;
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
        thid.sceneService.controls.minDistance = 0;
        thid.sceneService.controls.maxDistance = 8000;
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
            plane.position.y = -Math.random() * 800;
            plane.position.x = -Math.random() * 800;
            plane.position.z = i % 2 === 0 ? Math.random() * 500 : -Math.random() * 500;
            plane.rotation.y = Math.PI / 2;
            plane.scale.z = plane.scale.y = Math.random() * Math.random() * 1.5 + 0.5;
            kfCloudGroup.add(plane);
        }
        thid.sceneService.scene.add(kfCloudGroup);
        window["kfCloudGroup"] = kfCloudGroup;
        thid.sceneService.cameraInspect(-15, new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](-550, -550, 0), function () {
            kfCloudGroup.traverse(function (obj) {
                if (obj.type === 'Mesh') {
                    obj["geometry"].dispose();
                    obj["material"].dispose();
                }
            });
            thid.sceneService.scene.remove(kfCloudGroup);
            thid.sceneService.removeEventListener(thid.group, "dblclick");
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
        this.sceneService.controls.enableZoom = true;
        this.sceneService.controls.enableRotate = true;
        this.sceneService.controls.enablePan = true;
        this.sceneService.controls.enableKeys = true;
        this.sceneService.controls.keyPanSpeed = 7;
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
        let thid = this;
        thid.controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__["OrbitControls"](thid.camera, thid.cSS3DRenderer.domElement);
        window.addEventListener('resize', function () {
            thid.camera.aspect = window.innerWidth / window.innerHeight;
            thid.camera.updateProjectionMatrix();
            thid.renderer.setSize(window.innerWidth, window.innerHeight);
            thid.cSS2DRenderer.setSize(window.innerWidth, window.innerHeight);
            thid.cSS3DRenderer.setSize(window.innerWidth, window.innerHeight);
        }, false);
        thid.controls.target = new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, 0);
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
    addEventListener(listenerObj, even, callback) {
        let thid = this;
        listenerObj[even] = function (event) {
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
        };
        this.cSS3DRenderer.domElement.addEventListener(even, listenerObj[even], false);
    }
    removeEventListener(listenerObj, even) {
        this.cSS3DRenderer.domElement.removeEventListener(even, listenerObj[even]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXIvTWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9FYXJ0aFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvUGFya1NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvU2NlbmVTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlL2xvYWRlci9Db2RlTG9hZGVyU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9sb2FkZXIvRkJYTG9hZGVyU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9sb2FkZXIvT0JKTG9hZGVyU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9Db21tb25VdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9jb250cm9sbGVyL01haW4udHNcIixcInZlbmRvcnMtbWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCB7IFNjZW5lU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlL1NjZW5lU2VydmljZVwiO1xyXG5pbXBvcnQgeyBFYXJ0aFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZS9FYXJ0aFNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUGFycmtTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2UvUGFya1NlcnZpY2VcIjtcclxubGV0IHNjZW5lU2VydmljZSA9IG5ldyBTY2VuZVNlcnZpY2UoKTtcclxuc2NlbmVTZXJ2aWNlLmluaXRTY2VuZSgpO1xyXG5sZXQgZWFydGhTZXJ2aWNlID0gbmV3IEVhcnRoU2VydmljZShzY2VuZVNlcnZpY2UpO1xyXG5lYXJ0aFNlcnZpY2UubG9hZEVhcnRoKDUsIGZ1bmN0aW9uIChncm91cCkge1xyXG4gICAgZ3JvdXAucm90YXRpb24uc2V0KC1NYXRoLlBJIC8gOCwgLU1hdGguUEkgLyAxLjYzLCAwKTtcclxuICAgIHNjZW5lU2VydmljZS5hZGRFdmVudExpc3RlbmVyKGdyb3VwLCBcImRibGNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuWcsOeQg+iiq+m8oOagh+WPjOWHu1wiKTtcclxuICAgICAgICBlYXJ0aFNlcnZpY2UuZGJsY2xpY2tFYXJ0aChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yqg6L295Zut5Yy6Li4uXCIpO1xyXG4gICAgICAgICAgICBuZXcgUGFycmtTZXJ2aWNlKHNjZW5lU2VydmljZSkubG9hZFBhcnJrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcbndpbmRvd1tcInNjZW5lU2VydmljZVwiXSA9IHNjZW5lU2VydmljZTtcclxud2luZG93W1wiZWFydGhTZXJ2aWNlXCJdID0gZWFydGhTZXJ2aWNlO1xyXG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgQ29sb3IsIEdyb3VwIH0gZnJvbSBcInRocmVlXCI7XHJcbmV4cG9ydCBjbGFzcyBFYXJ0aFNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2UgPSBzY2VuZVNlcnZpY2U7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVTY2VuZSgpIHtcclxuICAgICAgICB0aGlzLnNjZW5lU2VydmljZS5jYW1lcmEucG9zaXRpb24uc2V0KDgwLCAwLCAwKTtcclxuICAgICAgICBsZXQgdmVjdG9yMyA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLmNhbWVyYS5sb29rQXQodmVjdG9yMyk7XHJcbiAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2UuY29udHJvbHMudGFyZ2V0ID0gdmVjdG9yMztcclxuICAgICAgICB0aGlzLnNjZW5lU2VydmljZS5jb250cm9scy5lbmFibGVab29tID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjZW5lU2VydmljZS5jb250cm9scy5lbmFibGVSb3RhdGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLmVuYWJsZVBhbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLmVuYWJsZUtleXMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjZW5lU2VydmljZS5jb250cm9scy5tYXhQb2xhckFuZ2xlID0gTWF0aC5QSTtcclxuICAgICAgICB0aGlzLnNjZW5lU2VydmljZS5jb250cm9scy5taW5EaXN0YW5jZSA9IDEwO1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLm1heERpc3RhbmNlID0gODA7XHJcbiAgICAgICAgdGhpcy5lYXJ0aFJvdGF0ZXNTdGVhZGlseUNhbWVyYVBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoNDAsIDAsIDApO1xyXG4gICAgfVxyXG4gICAgbG9hZEVhcnRoKHJhZGl1cywgb25Mb2FkKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTY2VuZSgpO1xyXG4gICAgICAgIGxldCBzcGhlcmUgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkocmFkaXVzLCA0MCwgNDApO1xyXG4gICAgICAgIGxldCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCgpO1xyXG4gICAgICAgIG1hdGVyaWFsLnRyYW5zcGFyZW50ID0gdHJ1ZTtcclxuICAgICAgICBtYXRlcmlhbC5tYXAgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpLmxvYWQoJy9pbWFnZXMvZWFydGgvZWFydGg0LmpwZycpO1xyXG4gICAgICAgIG1hdGVyaWFsLmJ1bXBNYXAgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpLmxvYWQoJy9pbWFnZXMvZWFydGgvZWFydGhfYnVtcC5qcGcnKTtcclxuICAgICAgICBtYXRlcmlhbC5idW1wU2NhbGUgPSAwLjE1O1xyXG4gICAgICAgIG1hdGVyaWFsLnNwZWN1bGFyTWFwID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKCcvaW1hZ2VzL2VhcnRoL2VhcnRoX3NwZWMuanBnJyk7XHJcbiAgICAgICAgbWF0ZXJpYWwuc3BlY3VsYXIgPSBuZXcgVEhSRUUuQ29sb3IoJyM5MDkwOTAnKTtcclxuICAgICAgICBtYXRlcmlhbC5zaGluaW5lc3MgPSA1O1xyXG4gICAgICAgIGxldCBlYXJ0aCA9IG5ldyBUSFJFRS5NZXNoKHNwaGVyZSwgbWF0ZXJpYWwpO1xyXG4gICAgICAgIGVhcnRoLm5hbWUgPSAnZWFydGgnO1xyXG4gICAgICAgIGxldCBjbG91ZFNwaGVyZSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeShyYWRpdXMgKyAwLjEsIDQwLCA0MCk7XHJcbiAgICAgICAgbGV0IGNsb3VkTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoKTtcclxuICAgICAgICBjbG91ZE1hdGVyaWFsLm1hcCA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZCgnL2ltYWdlcy9lYXJ0aC9lYXJ0aF9jbG91ZC5wbmcnKTtcclxuICAgICAgICBjbG91ZE1hdGVyaWFsLnRyYW5zcGFyZW50ID0gdHJ1ZTtcclxuICAgICAgICBjbG91ZE1hdGVyaWFsLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgIGNsb3VkTWF0ZXJpYWwuYmxlbmRpbmcgPSBUSFJFRS5BZGRpdGl2ZUJsZW5kaW5nO1xyXG4gICAgICAgIGxldCBjbG91ZE1lc2ggPSBuZXcgVEhSRUUuTWVzaChjbG91ZFNwaGVyZSwgY2xvdWRNYXRlcmlhbCk7XHJcbiAgICAgICAgY2xvdWRNZXNoLm5hbWUgPSBcImVhcnRoX2Nsb3VkMVwiO1xyXG4gICAgICAgIGxldCBjbG91ZFNwaGVyZTIgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkocmFkaXVzICsgMC4yLCA0MCwgNDApO1xyXG4gICAgICAgIGxldCBjbG91ZE1hdGVyaWFsMiA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCgpO1xyXG4gICAgICAgIGNsb3VkTWF0ZXJpYWwyLm1hcCA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZCgnL2ltYWdlcy9lYXJ0aC9lYXJ0aF9jbG91ZC5wbmcnKTtcclxuICAgICAgICBjbG91ZE1hdGVyaWFsMi50cmFuc3BhcmVudCA9IHRydWU7XHJcbiAgICAgICAgY2xvdWRNYXRlcmlhbDIub3BhY2l0eSA9IDE7XHJcbiAgICAgICAgY2xvdWRNYXRlcmlhbDIuYmxlbmRpbmcgPSBUSFJFRS5BZGRpdGl2ZUJsZW5kaW5nO1xyXG4gICAgICAgIGxldCBjbG91ZE1lc2gyID0gbmV3IFRIUkVFLk1lc2goY2xvdWRTcGhlcmUyLCBjbG91ZE1hdGVyaWFsMik7XHJcbiAgICAgICAgY2xvdWRNZXNoMi5uYW1lID0gXCJlYXJ0aF9jbG91ZDJcIjtcclxuICAgICAgICBjbG91ZE1lc2gyLnJvdGF0aW9uLnkgPSBNYXRoLlBJO1xyXG4gICAgICAgIGxldCBnbG93U3BoZXJlID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KHJhZGl1cywgNDAsIDQwKTtcclxuICAgICAgICBsZXQgZ2xvd01hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKHtcclxuICAgICAgICAgICAgdW5pZm9ybXM6IHtcclxuICAgICAgICAgICAgICAgICdjJzogeyB0eXBlOiAnZicsIHZhbHVlOiAwLjM0IH0sXHJcbiAgICAgICAgICAgICAgICAncCc6IHsgdHlwZTogJ2YnLCB2YWx1ZTogOS4xNyB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHZlcnRleFNoYWRlcjogWyd2YXJ5aW5nIHZlYzMgdk5vcm1hbDsnLCAndm9pZCBtYWluKCkgeycsICd2Tm9ybWFsID0gbm9ybWFsaXplKCBub3JtYWxNYXRyaXggKiBub3JtYWwgKTsnLCAnZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApOycsICd9J10uam9pbignXFxuJyksXHJcbiAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBbJ3VuaWZvcm0gZmxvYXQgYzsnLCAndW5pZm9ybSBmbG9hdCBwOycsICd2YXJ5aW5nIHZlYzMgdk5vcm1hbDsnLCAndm9pZCBtYWluKCkgeycsICdmbG9hdCBpbnRlbnNpdHkgPSBwb3coIGMgLSBkb3QoIHZOb3JtYWwsIHZlYzMoIDAuMCwgMC4wLCAxLjAgKSApLCBwICk7JywgJ2dsX0ZyYWdDb2xvciA9IHZlYzQoIDAuMiwgMC41OCwgMC45LCAwLjMgKSAqIGludGVuc2l0eTsnLCAnfSddLmpvaW4oJ1xcbicpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2xvd01hdGVyaWFsLnNpZGUgPSBUSFJFRS5CYWNrU2lkZTtcclxuICAgICAgICBnbG93TWF0ZXJpYWwudHJhbnNwYXJlbnQgPSBmYWxzZTtcclxuICAgICAgICBsZXQgZ2xvd01lc2ggPSBuZXcgVEhSRUUuTWVzaChnbG93U3BoZXJlLCBnbG93TWF0ZXJpYWwpO1xyXG4gICAgICAgIGdsb3dNZXNoLnNjYWxlLnggPSBnbG93TWVzaC5zY2FsZS55ID0gZ2xvd01lc2guc2NhbGUueiA9IDEuMztcclxuICAgICAgICBnbG93TWVzaC5uYW1lID0gJ2dsb3cnO1xyXG4gICAgICAgIGxldCBibGFja1NwaGVyZSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeShyYWRpdXMsIDQwLCA0MCk7XHJcbiAgICAgICAgbGV0IGJsYWNrTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHgwMDAwMDAgfSk7XHJcbiAgICAgICAgYmxhY2tNYXRlcmlhbC50cmFuc3BhcmVudCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBibGFja01lc2ggPSBuZXcgVEhSRUUuTWVzaChibGFja1NwaGVyZSwgYmxhY2tNYXRlcmlhbCk7XHJcbiAgICAgICAgYmxhY2tNZXNoLm5hbWUgPSAnYmxhY2snO1xyXG4gICAgICAgIGxldCBwb2ludHNHZW9tZXRyeSA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xyXG4gICAgICAgIHBvaW50c0dlb21ldHJ5LnZlcnRpY2VzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjMoLShyYWRpdXMgLyAxLjUpICsgMS4yLCAocmFkaXVzIC8gMS41KSAtIDAuOCwgLShyYWRpdXMgLyAxLjUpIC0gMSkpO1xyXG4gICAgICAgIHBvaW50c0dlb21ldHJ5LmNvbXB1dGVCb3VuZGluZ1NwaGVyZSgpO1xyXG4gICAgICAgIGxldCBwb2ludHNNYXRlcmlhbCA9IG5ldyBUSFJFRS5Qb2ludHNNYXRlcmlhbCgpO1xyXG4gICAgICAgIHBvaW50c01hdGVyaWFsLm1hcCA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZCgnL2ltYWdlcy9lYXJ0aC9pX21hcmlhbmEucG5nJyk7XHJcbiAgICAgICAgcG9pbnRzTWF0ZXJpYWwubWFwLm1pbkZpbHRlciA9IFRIUkVFLkxpbmVhckZpbHRlcjtcclxuICAgICAgICBwb2ludHNNYXRlcmlhbC5zaXplID0gNDtcclxuICAgICAgICBwb2ludHNNYXRlcmlhbC50cmFuc3BhcmVudCA9IHRydWU7XHJcbiAgICAgICAgbGV0IHBvaW50cyA9IG5ldyBUSFJFRS5Qb2ludHMocG9pbnRzR2VvbWV0cnksIHBvaW50c01hdGVyaWFsKTtcclxuICAgICAgICBwb2ludHMubmFtZSA9IFwi5rCU5Y6L56uZXCI7XHJcbiAgICAgICAgdGhpcy5lYXJ0aCA9IGVhcnRoO1xyXG4gICAgICAgIHRoaXMuY2xvdWQgPSBjbG91ZE1lc2g7XHJcbiAgICAgICAgdGhpcy5jbG91ZDIgPSBjbG91ZE1lc2gyO1xyXG4gICAgICAgIGxldCBncm91cCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xyXG4gICAgICAgIGVhcnRoLmFkZChwb2ludHMpO1xyXG4gICAgICAgIGdyb3VwLmFkZChlYXJ0aCk7XHJcbiAgICAgICAgZ3JvdXAuYWRkKGNsb3VkTWVzaCk7XHJcbiAgICAgICAgZ3JvdXAuYWRkKGNsb3VkTWVzaDIpO1xyXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBncm91cDtcclxuICAgICAgICBpZiAob25Mb2FkKVxyXG4gICAgICAgICAgICBvbkxvYWQoZ3JvdXApO1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLnNjZW5lLmFkZChncm91cCk7XHJcbiAgICAgICAgdGhpcy5pbml0QW5pbWF0ZSgpO1xyXG4gICAgfVxyXG4gICAgaW5pdEFuaW1hdGUoKSB7XHJcbiAgICAgICAgbGV0IHRoaWQgPSB0aGlzO1xyXG4gICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLmNhbWVyYUluc3BlY3QoLTAuNSwgbmV3IFRIUkVFLlZlY3RvcjModGhpZC5lYXJ0aFJvdGF0ZXNTdGVhZGlseUNhbWVyYVBvc2l0aW9uLngsIHRoaWQuZWFydGhSb3RhdGVzU3RlYWRpbHlDYW1lcmFQb3NpdGlvbi55LCB0aGlkLmVhcnRoUm90YXRlc1N0ZWFkaWx5Q2FtZXJhUG9zaXRpb24ueiksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpZC5hdXRvUm90YXRpb25BbmltYXRlUGxheSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYXV0b1JvdGF0aW9uQW5pbWF0ZVBsYXkoKSB7XHJcbiAgICAgICAgdGhpcy5lYXJ0aC5yb3RhdGlvbi55ICs9IDAuMDAxO1xyXG4gICAgICAgIHRoaXMuY2xvdWQucm90YXRpb24ueSArPSAwLjAwMDU7XHJcbiAgICAgICAgdGhpcy5jbG91ZDIucm90YXRpb24ueSArPSAwLjAwMDU7XHJcbiAgICAgICAgbGV0IG51bWJlciA9IDAuMDA3O1xyXG4gICAgICAgIGlmIChOdW1iZXIodGhpcy5zY2VuZVNlcnZpY2UuY2FtZXJhLnBvc2l0aW9uLngudG9GaXhlZCgzKSkgIT09IHRoaXMuZWFydGhSb3RhdGVzU3RlYWRpbHlDYW1lcmFQb3NpdGlvbi54KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNjZW5lU2VydmljZS5jYW1lcmEucG9zaXRpb24ueCA8IHRoaXMuZWFydGhSb3RhdGVzU3RlYWRpbHlDYW1lcmFQb3NpdGlvbi54KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lU2VydmljZS5jYW1lcmEucG9zaXRpb24ueCArPSBudW1iZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2NlbmVTZXJ2aWNlLmNhbWVyYS5wb3NpdGlvbi54ID4gdGhpcy5lYXJ0aFJvdGF0ZXNTdGVhZGlseUNhbWVyYVBvc2l0aW9uLngpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLmNhbWVyYS5wb3NpdGlvbi54IC09IG51bWJlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoTnVtYmVyKHRoaXMuc2NlbmVTZXJ2aWNlLmNhbWVyYS5wb3NpdGlvbi55LnRvRml4ZWQoMykpICE9PSB0aGlzLmVhcnRoUm90YXRlc1N0ZWFkaWx5Q2FtZXJhUG9zaXRpb24ueSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zY2VuZVNlcnZpY2UuY2FtZXJhLnBvc2l0aW9uLnkgPCB0aGlzLmVhcnRoUm90YXRlc1N0ZWFkaWx5Q2FtZXJhUG9zaXRpb24ueSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2UuY2FtZXJhLnBvc2l0aW9uLnkgKz0gbnVtYmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNjZW5lU2VydmljZS5jYW1lcmEucG9zaXRpb24ueSA+IHRoaXMuZWFydGhSb3RhdGVzU3RlYWRpbHlDYW1lcmFQb3NpdGlvbi55KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lU2VydmljZS5jYW1lcmEucG9zaXRpb24ueSAtPSBudW1iZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE51bWJlcih0aGlzLnNjZW5lU2VydmljZS5jYW1lcmEucG9zaXRpb24uei50b0ZpeGVkKDMpKSAhPT0gdGhpcy5lYXJ0aFJvdGF0ZXNTdGVhZGlseUNhbWVyYVBvc2l0aW9uLnopIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2NlbmVTZXJ2aWNlLmNhbWVyYS5wb3NpdGlvbi56IDwgdGhpcy5lYXJ0aFJvdGF0ZXNTdGVhZGlseUNhbWVyYVBvc2l0aW9uLnopIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLmNhbWVyYS5wb3NpdGlvbi56ICs9IG51bWJlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zY2VuZVNlcnZpY2UuY2FtZXJhLnBvc2l0aW9uLnogPiB0aGlzLmVhcnRoUm90YXRlc1N0ZWFkaWx5Q2FtZXJhUG9zaXRpb24ueikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2UuY2FtZXJhLnBvc2l0aW9uLnogLT0gbnVtYmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0aGlkID0gdGhpcztcclxuICAgICAgICB0aGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZUZsYWcgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlkLmF1dG9Sb3RhdGlvbkFuaW1hdGVQbGF5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBkYmxjbGlja0VhcnRoKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgbGV0IHRoaWQgPSB0aGlzO1xyXG4gICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLmVuYWJsZVpvb20gPSBmYWxzZTtcclxuICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5jb250cm9scy5lbmFibGVSb3RhdGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5jb250cm9scy5lbmFibGVQYW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5jb250cm9scy5lbmFibGVLZXlzID0gZmFsc2U7XHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpZC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWVGbGFnKTtcclxuICAgICAgICBsZXQgb2xkUG9zaXRpb24gPSB0aGlkLnNjZW5lU2VydmljZS5jYW1lcmEucG9zaXRpb247XHJcbiAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0geyB4OiA0MCwgeTogMCwgejogMCB9O1xyXG4gICAgICAgIGxldCBvbGRSb3RhdGlvbiA9IHRoaWQuZWFydGgucm90YXRpb247XHJcbiAgICAgICAgbGV0IG5ld1JvdGF0aW9uID0geyB4OiAwLCB5OiAwLCB6OiAwIH07XHJcbiAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UubXlBbmltYXRlKDEsIGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBsZXQgcG9zaXRpb25feCA9IG9sZFBvc2l0aW9uLnggKyAobmV3UG9zaXRpb24ueCAtIG9sZFBvc2l0aW9uLngpICogdmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbl95ID0gb2xkUG9zaXRpb24ueSArIChuZXdQb3NpdGlvbi55IC0gb2xkUG9zaXRpb24ueSkgKiB2YWx1ZTtcclxuICAgICAgICAgICAgbGV0IHBvc2l0aW9uX3ogPSBvbGRQb3NpdGlvbi56ICsgKG5ld1Bvc2l0aW9uLnogLSBvbGRQb3NpdGlvbi56KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5jYW1lcmEucG9zaXRpb24uc2V0KHBvc2l0aW9uX3gsIHBvc2l0aW9uX3ksIHBvc2l0aW9uX3opO1xyXG4gICAgICAgICAgICBsZXQgcm90YXRpb25feCA9IG9sZFJvdGF0aW9uLnggKyAobmV3Um90YXRpb24ueCAtIG9sZFJvdGF0aW9uLngpICogdmFsdWU7XHJcbiAgICAgICAgICAgIGxldCByb3RhdGlvbl95ID0gb2xkUm90YXRpb24ueSArIChuZXdSb3RhdGlvbi55IC0gb2xkUm90YXRpb24ueSkgKiB2YWx1ZTtcclxuICAgICAgICAgICAgbGV0IHJvdGF0aW9uX3ogPSBvbGRSb3RhdGlvbi56ICsgKG5ld1JvdGF0aW9uLnogLSBvbGRSb3RhdGlvbi56KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlkLmVhcnRoLnJvdGF0aW9uLnNldChyb3RhdGlvbl94LCByb3RhdGlvbl95LCByb3RhdGlvbl96KTtcclxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBvbGRQb3NpdGlvbiA9IHRoaWQuc2NlbmVTZXJ2aWNlLmNhbWVyYS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UuY2FtZXJhSW5zcGVjdCgtMC41LCBuZXcgVEhSRUUuVmVjdG9yMygxMCwgb2xkUG9zaXRpb24ueSwgb2xkUG9zaXRpb24ueiksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaWQuZ3JvdXAudHJhdmVyc2UoZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmoudHlwZSA9PT0gJ01lc2gnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtcImdlb21ldHJ5XCJdLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW1wibWF0ZXJpYWxcIl0uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2Uuc2NlbmUucmVtb3ZlKHRoaWQuZ3JvdXApO1xyXG4gICAgICAgICAgICAgICAgdGhpZC5rZkNsb3VkQW5pbWF0ZShjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAga2ZDbG91ZEFuaW1hdGUoY2FsbGJhY2spIHtcclxuICAgICAgICBsZXQgdGhpZCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHZlY3RvcjMgPSBuZXcgVEhSRUUuVmVjdG9yMygtNTAwMCwgLTQwMDAsIDApO1xyXG4gICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLmNhbWVyYS5sb29rQXQodmVjdG9yMyk7XHJcbiAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UuY29udHJvbHMudGFyZ2V0ID0gdmVjdG9yMztcclxuICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5jb250cm9scy5taW5EaXN0YW5jZSA9IDA7XHJcbiAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UuY29udHJvbHMubWF4RGlzdGFuY2UgPSA4MDAwO1xyXG4gICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLnNjZW5lLmJhY2tncm91bmQgPSBuZXcgQ29sb3IoXCIjMzI2Njk2XCIpO1xyXG4gICAgICAgIGxldCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDUwLCA0NSwgMzIsIDMyKTtcclxuICAgICAgICBsZXQgdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZCgnL2ltYWdlcy9lYXJ0aC9jbG91ZC5wbmcnKTtcclxuICAgICAgICB0ZXh0dXJlLm1hZ0ZpbHRlciA9IFRIUkVFLkxpbmVhck1pcE1hcExpbmVhckZpbHRlcjtcclxuICAgICAgICB0ZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLkxpbmVhck1pcE1hcExpbmVhckZpbHRlcjtcclxuICAgICAgICBsZXQgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICBtYXA6IHRleHR1cmUsXHJcbiAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IGtmQ2xvdWRHcm91cCA9IG5ldyBHcm91cCgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODAwMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBwbGFuZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIHBsYW5lLnBvc2l0aW9uLnkgPSAtTWF0aC5yYW5kb20oKSAqIDgwMDtcclxuICAgICAgICAgICAgcGxhbmUucG9zaXRpb24ueCA9IC1NYXRoLnJhbmRvbSgpICogODAwO1xyXG4gICAgICAgICAgICBwbGFuZS5wb3NpdGlvbi56ID0gaSAlIDIgPT09IDAgPyBNYXRoLnJhbmRvbSgpICogNTAwIDogLU1hdGgucmFuZG9tKCkgKiA1MDA7XHJcbiAgICAgICAgICAgIHBsYW5lLnJvdGF0aW9uLnkgPSBNYXRoLlBJIC8gMjtcclxuICAgICAgICAgICAgcGxhbmUuc2NhbGUueiA9IHBsYW5lLnNjYWxlLnkgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5yYW5kb20oKSAqIDEuNSArIDAuNTtcclxuICAgICAgICAgICAga2ZDbG91ZEdyb3VwLmFkZChwbGFuZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLnNjZW5lLmFkZChrZkNsb3VkR3JvdXApO1xyXG4gICAgICAgIHdpbmRvd1tcImtmQ2xvdWRHcm91cFwiXSA9IGtmQ2xvdWRHcm91cDtcclxuICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5jYW1lcmFJbnNwZWN0KC0xNSwgbmV3IFRIUkVFLlZlY3RvcjMoLTU1MCwgLTU1MCwgMCksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAga2ZDbG91ZEdyb3VwLnRyYXZlcnNlKGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmoudHlwZSA9PT0gJ01lc2gnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqW1wiZ2VvbWV0cnlcIl0uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9ialtcIm1hdGVyaWFsXCJdLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLnNjZW5lLnJlbW92ZShrZkNsb3VkR3JvdXApO1xyXG4gICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5yZW1vdmVFdmVudExpc3RlbmVyKHRoaWQuZ3JvdXAsIFwiZGJsY2xpY2tcIik7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaylcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29kZUxvYWRlclNlcnZpY2UgfSBmcm9tIFwiLi9sb2FkZXIvQ29kZUxvYWRlclNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ29tbW9uVXRpbCB9IGZyb20gXCIuLi91dGlsL0NvbW1vblV0aWxcIjtcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IENTUzJET2JqZWN0IH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9yZW5kZXJlcnMvQ1NTMkRSZW5kZXJlclwiO1xyXG5pbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IHsgQ1NTM0RPYmplY3QgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3JlbmRlcmVycy9DU1MzRFJlbmRlcmVyXCI7XHJcbmltcG9ydCB7IE9CSkxvYWRlclNlcnZpY2UgfSBmcm9tIFwiLi9sb2FkZXIvT0JKTG9hZGVyU2VydmljZVwiO1xyXG5pbXBvcnQgeyBGQlhMb2FkZXJTZXJ2aWNlIH0gZnJvbSBcIi4vbG9hZGVyL0ZCWExvYWRlclNlcnZpY2VcIjtcclxuZXhwb3J0IGNsYXNzIFBhcnJrU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnNjZW5lU2VydmljZSA9IHNjZW5lU2VydmljZTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVNjZW5lKCkge1xyXG4gICAgICAgIGxldCBwYXRoID0gXCIvaW1hZ2VzL3NreWJveC9cIjtcclxuICAgICAgICBsZXQgZm9ybWF0ID0gJy5qcGcnO1xyXG4gICAgICAgIGxldCB1cmxzID0gW1xyXG4gICAgICAgICAgICBwYXRoICsgJ3B4JyArIGZvcm1hdCwgcGF0aCArICdueCcgKyBmb3JtYXQsXHJcbiAgICAgICAgICAgIHBhdGggKyAncHknICsgZm9ybWF0LCBwYXRoICsgJ255JyArIGZvcm1hdCxcclxuICAgICAgICAgICAgcGF0aCArICdweicgKyBmb3JtYXQsIHBhdGggKyAnbnonICsgZm9ybWF0XHJcbiAgICAgICAgXTtcclxuICAgICAgICB0aGlzLnNjZW5lU2VydmljZS5zY2VuZS5iYWNrZ3JvdW5kID0gbmV3IFRIUkVFLkN1YmVUZXh0dXJlTG9hZGVyKCkubG9hZCh1cmxzKTtcclxuICAgICAgICB0aGlzLnNjZW5lU2VydmljZS5jYW1lcmEucG9zaXRpb24uc2V0KDUwMCwgNTAwLCA1MDApO1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCkpO1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLnRhcmdldCA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLmVuYWJsZVpvb20gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLmVuYWJsZVJvdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2UuY29udHJvbHMuZW5hYmxlUGFuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjZW5lU2VydmljZS5jb250cm9scy5lbmFibGVLZXlzID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjZW5lU2VydmljZS5jb250cm9scy5rZXlQYW5TcGVlZCA9IDc7XHJcbiAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2UuY29udHJvbHMubWF4UG9sYXJBbmdsZSA9IE1hdGguUEkgKiAwLjU7XHJcbiAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2UuY29udHJvbHMubWluRGlzdGFuY2UgPSAxMDA7XHJcbiAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2UuY29udHJvbHMubWF4RGlzdGFuY2UgPSA1MDAwO1xyXG4gICAgfVxyXG4gICAgbG9hZFBhcnJrKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2NlbmUoKTtcclxuICAgICAgICBsZXQgdGhpZCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGdyb3VuZFRleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpLmxvYWQoXCIvaW1hZ2VzL21pbmVjcmFmdC9ncmFzc2xpZ2h0LWJpZy5qcGdcIik7XHJcbiAgICAgICAgZ3JvdW5kVGV4dHVyZS53cmFwUyA9IGdyb3VuZFRleHR1cmUud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuICAgICAgICBncm91bmRUZXh0dXJlLnJlcGVhdC5zZXQoMjUsIDI1KTtcclxuICAgICAgICBncm91bmRUZXh0dXJlLmFuaXNvdHJvcHkgPSAxNjtcclxuICAgICAgICBsZXQgZ3JvdW5kTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCh7IG1hcDogZ3JvdW5kVGV4dHVyZSB9KTtcclxuICAgICAgICBsZXQgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KDIwMDAwLCAyMDAwMCksIGdyb3VuZE1hdGVyaWFsKTtcclxuICAgICAgICBtZXNoLnJvdGF0aW9uLnggPSAtTWF0aC5QSSAvIDI7XHJcbiAgICAgICAgbWVzaC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcclxuICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5zY2VuZS5hZGQobWVzaCk7XHJcbiAgICAgICAgbGV0IGNvZGVMb2FkZXJTZXJ2aWNlID0gbmV3IENvZGVMb2FkZXJTZXJ2aWNlKHRoaWQuc2NlbmVTZXJ2aWNlKTtcclxuICAgICAgICBjb2RlTG9hZGVyU2VydmljZS5sb2FkQ29kZSg3MCwgNzAsIDcwLCBmdW5jdGlvbiAobWVzaCkge1xyXG4gICAgICAgICAgICBtZXNoLnBvc2l0aW9uLnNldCgtMTAwLCAxMDAsIDApO1xyXG4gICAgICAgICAgICBtZXNoLmNhc3RTaGFkb3cgPSB0cnVlO1xyXG4gICAgICAgICAgICBtZXNoLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5hZGRFdmVudExpc3RlbmVyKG1lc2gsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLnq4vmlrnkvZPlr7nosaHooqvpvKDmoIfngrnlh7tcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2xkTG9va0F0ID0gdGhpZC5zY2VuZVNlcnZpY2UuY29udHJvbHMudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0xvb2tBdCA9IG9iamVjdC5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIGlmICghQ29tbW9uVXRpbC5vYmpJc0VxdWFsKG9sZExvb2tBdCwgbmV3TG9va0F0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLm15QW5pbWF0ZSgyLCBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvb2tBdF94ID0gb2xkTG9va0F0LnggKyAobmV3TG9va0F0LnggLSBvbGRMb29rQXQueCkgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvb2tBdF95ID0gb2xkTG9va0F0LnkgKyAobmV3TG9va0F0LnkgLSBvbGRMb29rQXQueSkgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvb2tBdF96ID0gb2xkTG9va0F0LnogKyAobmV3TG9va0F0LnogLSBvbGRMb29rQXQueikgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZlY3RvcjMgPSBuZXcgVEhSRUUuVmVjdG9yMyhsb29rQXRfeCwgbG9va0F0X3ksIGxvb2tBdF96KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UuY2FtZXJhLmxvb2tBdCh2ZWN0b3IzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UuY29udHJvbHMudGFyZ2V0ID0gdmVjdG9yMztcclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvbGRQb3NpdGlvbiA9IHRoaWQuc2NlbmVTZXJ2aWNlLmNhbWVyYS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gb2JqZWN0LnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5teUFuaW1hdGUoMiwgZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FtZXJhQmFja0Rpc3RfeCA9IDgwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYW1lcmFCYWNrRGlzdF95ID0gMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhbWVyYUJhY2tEaXN0X3ogPSA4MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb25feCA9IG9sZFBvc2l0aW9uLnggKyAobmV3UG9zaXRpb24ueCArIGNhbWVyYUJhY2tEaXN0X3ggLSBvbGRQb3NpdGlvbi54KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uX3kgPSBvbGRQb3NpdGlvbi55ICsgKG5ld1Bvc2l0aW9uLnkgKyBjYW1lcmFCYWNrRGlzdF95IC0gb2xkUG9zaXRpb24ueSkgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbl96ID0gb2xkUG9zaXRpb24ueiArIChuZXdQb3NpdGlvbi56ICsgY2FtZXJhQmFja0Rpc3RfeiAtIG9sZFBvc2l0aW9uLnopICogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5jYW1lcmEucG9zaXRpb24uc2V0KHBvc2l0aW9uX3gsIHBvc2l0aW9uX3ksIHBvc2l0aW9uX3opO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UuY29udHJvbHMudXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yqo55S75pKt5pS+5a6M5q+VXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGh0bWwgPSBcIjxkaXYgY2xhc3M9XFxcImVsZW1lbnRcXFwiPlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9XFxcIm51bWJlclxcXCI+57yW5Y+377yaMDAxPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPGRpdiBjbGFzcz1cXFwic3ltYm9sXFxcIj7nq4vmlrnkvZM8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPVxcXCJkZXRhaWxzXFxcIj7mma7pgJrnmoTnq4vmlrnkvZPvvIwyROeahGxhYmVsPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPC9kaXY+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY1NTMkRPYmplY3QgPSBuZXcgQ1NTMkRPYmplY3QoJChodG1sKVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjU1MyRE9iamVjdC5uYW1lID0gXCIyZExhYmVsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjU1MyRE9iamVjdC5wb3NpdGlvbi55ID0gMTIwIC8gMiArIDcwIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5yZW1vdmUob2JqZWN0LmdldE9iamVjdEJ5TmFtZShcIjJkTGFiZWxcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmFkZChjU1MyRE9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb2RlTG9hZGVyU2VydmljZS5sb2FkQ29kZSg3MCwgNzAsIDcwLCBmdW5jdGlvbiAobWVzaCkge1xyXG4gICAgICAgICAgICBtZXNoLnBvc2l0aW9uLnNldCgxMDAsIDEwMCwgMCk7XHJcbiAgICAgICAgICAgIG1lc2guY2FzdFNoYWRvdyA9IHRydWU7XHJcbiAgICAgICAgICAgIG1lc2gucmVjZWl2ZVNoYWRvdyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLmFkZEV2ZW50TGlzdGVuZXIobWVzaCwgXCJjbGlja1wiLCBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIueri+aWueS9k+Wvueixoeiiq+m8oOagh+eCueWHu1wiKTtcclxuICAgICAgICAgICAgICAgIGxldCBvbGRMb29rQXQgPSB0aGlkLnNjZW5lU2VydmljZS5jb250cm9scy50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3TG9va0F0ID0gb2JqZWN0LnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFDb21tb25VdGlsLm9iaklzRXF1YWwob2xkTG9va0F0LCBuZXdMb29rQXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UubXlBbmltYXRlKDIsIGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9va0F0X3ggPSBvbGRMb29rQXQueCArIChuZXdMb29rQXQueCAtIG9sZExvb2tBdC54KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9va0F0X3kgPSBvbGRMb29rQXQueSArIChuZXdMb29rQXQueSAtIG9sZExvb2tBdC55KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9va0F0X3ogPSBvbGRMb29rQXQueiArIChuZXdMb29rQXQueiAtIG9sZExvb2tBdC56KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmVjdG9yMyA9IG5ldyBUSFJFRS5WZWN0b3IzKGxvb2tBdF94LCBsb29rQXRfeSwgbG9va0F0X3opO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5jYW1lcmEubG9va0F0KHZlY3RvcjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5jb250cm9scy50YXJnZXQgPSB2ZWN0b3IzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9sZFBvc2l0aW9uID0gdGhpZC5zY2VuZVNlcnZpY2UuY2FtZXJhLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSBvYmplY3QucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLm15QW5pbWF0ZSgyLCBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYW1lcmFCYWNrRGlzdF94ID0gODAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhbWVyYUJhY2tEaXN0X3kgPSAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FtZXJhQmFja0Rpc3RfeiA9IDgwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbl94ID0gb2xkUG9zaXRpb24ueCArIChuZXdQb3NpdGlvbi54ICsgY2FtZXJhQmFja0Rpc3RfeCAtIG9sZFBvc2l0aW9uLngpICogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb25feSA9IG9sZFBvc2l0aW9uLnkgKyAobmV3UG9zaXRpb24ueSArIGNhbWVyYUJhY2tEaXN0X3kgLSBvbGRQb3NpdGlvbi55KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uX3ogPSBvbGRQb3NpdGlvbi56ICsgKG5ld1Bvc2l0aW9uLnogKyBjYW1lcmFCYWNrRGlzdF96IC0gb2xkUG9zaXRpb24ueikgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLmNhbWVyYS5wb3NpdGlvbi5zZXQocG9zaXRpb25feCwgcG9zaXRpb25feSwgcG9zaXRpb25feik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5jb250cm9scy51cGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLliqjnlLvmkq3mlL7lrozmr5VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaHRtbCA9IFwiPGRpdiBjbGFzcz1cXFwiZWxlbWVudFxcXCI+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPGRpdiBjbGFzcz1cXFwibnVtYmVyXFxcIj7nvJblj7fvvJowMDI8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPVxcXCJzeW1ib2xcXFwiPueri+aWueS9kzwvZGl2PlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9XFxcImRldGFpbHNcXFwiPuaZrumAmueahOeri+aWueS9k++8jDNE55qEbGFiZWw8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8L2Rpdj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjU1MzRE9iamVjdCA9IG5ldyBDU1MzRE9iamVjdCgkKGh0bWwpWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNTUzNET2JqZWN0Lm5hbWUgPSBcIjNkTGFiZWxcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNTUzNET2JqZWN0LnBvc2l0aW9uLnkgPSAxMjAgLyAyICsgNzAgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnJlbW92ZShvYmplY3QuZ2V0T2JqZWN0QnlOYW1lKFwiM2RMYWJlbFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QuYWRkKGNTUzNET2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBvYmpMb2FkZXJTZXJ2aWNlID0gbmV3IE9CSkxvYWRlclNlcnZpY2UodGhpZC5zY2VuZVNlcnZpY2UpO1xyXG4gICAgICAgIG9iakxvYWRlclNlcnZpY2UubG9hZE9iaihcIi9tb2RlbHMvb2JqL21hbGUwMi9tYWxlMDJcIiwgZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgICAgICBvYmplY3QucG9zaXRpb24uc2V0KDMwMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIG9iamVjdC5jYXN0U2hhZG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgb2JqZWN0LnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5hZGRFdmVudExpc3RlbmVyKG9iamVjdCwgXCJjbGlja1wiLCBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIueUt+S6uuiiq+m8oOagh+eCueWHu1wiKTtcclxuICAgICAgICAgICAgICAgIGxldCBvbGRMb29rQXQgPSB0aGlkLnNjZW5lU2VydmljZS5jb250cm9scy50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3TG9va0F0ID0gb2JqZWN0LnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFDb21tb25VdGlsLm9iaklzRXF1YWwob2xkTG9va0F0LCBuZXdMb29rQXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UubXlBbmltYXRlKDIsIGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9va0F0X3ggPSBvbGRMb29rQXQueCArIChuZXdMb29rQXQueCAtIG9sZExvb2tBdC54KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9va0F0X3kgPSBvbGRMb29rQXQueSArIChuZXdMb29rQXQueSAtIG9sZExvb2tBdC55KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9va0F0X3ogPSBvbGRMb29rQXQueiArIChuZXdMb29rQXQueiAtIG9sZExvb2tBdC56KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmVjdG9yMyA9IG5ldyBUSFJFRS5WZWN0b3IzKGxvb2tBdF94LCBsb29rQXRfeSwgbG9va0F0X3opO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5jYW1lcmEubG9va0F0KHZlY3RvcjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5jb250cm9scy50YXJnZXQgPSB2ZWN0b3IzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9sZFBvc2l0aW9uID0gdGhpZC5zY2VuZVNlcnZpY2UuY2FtZXJhLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSBvYmplY3QucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLm15QW5pbWF0ZSgyLCBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYW1lcmFCYWNrRGlzdF94ID0gODAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhbWVyYUJhY2tEaXN0X3kgPSAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FtZXJhQmFja0Rpc3RfeiA9IDgwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbl94ID0gb2xkUG9zaXRpb24ueCArIChuZXdQb3NpdGlvbi54ICsgY2FtZXJhQmFja0Rpc3RfeCAtIG9sZFBvc2l0aW9uLngpICogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb25feSA9IG9sZFBvc2l0aW9uLnkgKyAobmV3UG9zaXRpb24ueSArIGNhbWVyYUJhY2tEaXN0X3kgLSBvbGRQb3NpdGlvbi55KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uX3ogPSBvbGRQb3NpdGlvbi56ICsgKG5ld1Bvc2l0aW9uLnogKyBjYW1lcmFCYWNrRGlzdF96IC0gb2xkUG9zaXRpb24ueikgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLmNhbWVyYS5wb3NpdGlvbi5zZXQocG9zaXRpb25feCwgcG9zaXRpb25feSwgcG9zaXRpb25feik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5jb250cm9scy51cGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLliqjnlLvmkq3mlL7lrozmr5VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaHRtbCA9IFwiPGRpdiBjbGFzcz1cXFwiZWxlbWVudFxcXCI+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPGRpdiBjbGFzcz1cXFwibnVtYmVyXFxcIj7nvJblj7fvvJowMDE8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPVxcXCJzeW1ib2xcXFwiPueUt+S6ujwvZGl2PlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9XFxcImRldGFpbHNcXFwiPuermeeri+eahOeUt+S6uu+8jDNE55qEbGFiZWw8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8L2Rpdj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjU1MzRE9iamVjdCA9IG5ldyBDU1MzRE9iamVjdCgkKGh0bWwpWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNTUzNET2JqZWN0Lm5hbWUgPSBcIjNkTGFiZWxcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNTUzNET2JqZWN0LnBvc2l0aW9uLnkgPSAxMjAgLyAyICsgNzAgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnJlbW92ZShvYmplY3QuZ2V0T2JqZWN0QnlOYW1lKFwiM2RMYWJlbFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QuYWRkKGNTUzNET2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBmYnhMb2FkZXJTZXJ2aWNlID0gbmV3IEZCWExvYWRlclNlcnZpY2UodGhpZC5zY2VuZVNlcnZpY2UpO1xyXG4gICAgICAgIGZieExvYWRlclNlcnZpY2UubG9hZEZieChcIi9tb2RlbHMvZmJ4L3NhbWJhX2RhbmNpbmcvU2FtYmEgRGFuY2luZ1wiLCBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgICAgIG9iamVjdC5wb3NpdGlvbi5zZXQoLTMwMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLnNjZW5lLmFkZChuZXcgVEhSRUUuU2tlbGV0b25IZWxwZXIob2JqZWN0KSk7XHJcbiAgICAgICAgICAgIG9iamVjdC50cmF2ZXJzZShmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmNhc3RTaGFkb3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucmVjZWl2ZVNoYWRvdyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsZXQgY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcclxuICAgICAgICAgICAgbGV0IG1peGVyID0gbmV3IFRIUkVFLkFuaW1hdGlvbk1peGVyKG9iamVjdCk7XHJcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSBtaXhlci5jbGlwQWN0aW9uKG9iamVjdC5hbmltYXRpb25zWzBdKTtcclxuICAgICAgICAgICAgYWN0aW9uLnBsYXkoKTtcclxuICAgICAgICAgICAgYW5pbWF0ZSgpO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xyXG4gICAgICAgICAgICAgICAgbWl4ZXIudXBkYXRlKGNsb2NrLmdldERlbHRhKCkpO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLmFkZEV2ZW50TGlzdGVuZXIob2JqZWN0LCBcImNsaWNrXCIsIGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5aWz5Lq66KKr6byg5qCH54K55Ye7XCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9sZExvb2tBdCA9IHRoaWQuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLnRhcmdldDtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdMb29rQXQgPSBvYmplY3QucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBpZiAoIUNvbW1vblV0aWwub2JqSXNFcXVhbChvbGRMb29rQXQsIG5ld0xvb2tBdCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5teUFuaW1hdGUoMiwgZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb29rQXRfeCA9IG9sZExvb2tBdC54ICsgKG5ld0xvb2tBdC54IC0gb2xkTG9va0F0LngpICogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb29rQXRfeSA9IG9sZExvb2tBdC55ICsgKG5ld0xvb2tBdC55IC0gb2xkTG9va0F0LnkpICogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb29rQXRfeiA9IG9sZExvb2tBdC56ICsgKG5ld0xvb2tBdC56IC0gb2xkTG9va0F0LnopICogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2ZWN0b3IzID0gbmV3IFRIUkVFLlZlY3RvcjMobG9va0F0X3gsIGxvb2tBdF95LCBsb29rQXRfeik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLmNhbWVyYS5sb29rQXQodmVjdG9yMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLnRhcmdldCA9IHZlY3RvcjM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2xkUG9zaXRpb24gPSB0aGlkLnNjZW5lU2VydmljZS5jYW1lcmEucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IG9iamVjdC5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UubXlBbmltYXRlKDIsIGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhbWVyYUJhY2tEaXN0X3ggPSA4MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FtZXJhQmFja0Rpc3RfeSA9IDMwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYW1lcmFCYWNrRGlzdF96ID0gODAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uX3ggPSBvbGRQb3NpdGlvbi54ICsgKG5ld1Bvc2l0aW9uLnggKyBjYW1lcmFCYWNrRGlzdF94IC0gb2xkUG9zaXRpb24ueCkgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbl95ID0gb2xkUG9zaXRpb24ueSArIChuZXdQb3NpdGlvbi55ICsgY2FtZXJhQmFja0Rpc3RfeSAtIG9sZFBvc2l0aW9uLnkpICogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb25feiA9IG9sZFBvc2l0aW9uLnogKyAobmV3UG9zaXRpb24ueiArIGNhbWVyYUJhY2tEaXN0X3ogLSBvbGRQb3NpdGlvbi56KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UuY2FtZXJhLnBvc2l0aW9uLnNldChwb3NpdGlvbl94LCBwb3NpdGlvbl95LCBwb3NpdGlvbl96KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWKqOeUu+aSreaUvuWujOavlVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJlbGVtZW50XFxcIj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPVxcXCJudW1iZXJcXFwiPue8luWPt++8mjAwMTwvZGl2PlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9XFxcInN5bWJvbFxcXCI+5aWz5Lq6PC9kaXY+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPGRpdiBjbGFzcz1cXFwiZGV0YWlsc1xcXCI+6Lez6Iie55qE5aWz5Lq677yMM0TnmoRsYWJlbDwvZGl2PlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjwvZGl2PlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNTUzNET2JqZWN0ID0gbmV3IENTUzNET2JqZWN0KCQoaHRtbClbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY1NTM0RPYmplY3QubmFtZSA9IFwiM2RMYWJlbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY1NTM0RPYmplY3QucG9zaXRpb24ueSA9IDEyMCAvIDIgKyA3MCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QucmVtb3ZlKG9iamVjdC5nZXRPYmplY3RCeU5hbWUoXCIzZExhYmVsXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5hZGQoY1NTM0RPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHNcIjtcclxuaW1wb3J0IHsgQ1NTMkRSZW5kZXJlciB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vcmVuZGVyZXJzL0NTUzJEUmVuZGVyZXJcIjtcclxuaW1wb3J0IHsgQ1NTM0RSZW5kZXJlciB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vcmVuZGVyZXJzL0NTUzNEUmVuZGVyZXJcIjtcclxuZXhwb3J0IGNsYXNzIFNjZW5lU2VydmljZSB7XHJcbiAgICBpbml0U2NlbmUoKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG4gICAgICAgIHRoaXMucGVyc3BlY3RpdmVDYW1lcmEoKTtcclxuICAgICAgICB0aGlzLndlYkdMUmVuZGVyZXIoKTtcclxuICAgICAgICB0aGlzLmNTUzJEUmVuZGVyZXJGdW4oKTtcclxuICAgICAgICB0aGlzLmNTUzNEUmVuZGVyZXJGdW4oKTtcclxuICAgICAgICB0aGlzLm9yYml0Q29udHJvbHMoKTtcclxuICAgICAgICB0aGlzLmxpZ2h0KCk7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICAgIGJhY2tncm91bmQoKSB7XHJcbiAgICB9XHJcbiAgICBvcmJpdENvbnRyb2xzKCkge1xyXG4gICAgICAgIGxldCB0aGlkID0gdGhpcztcclxuICAgICAgICB0aGlkLmNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHModGhpZC5jYW1lcmEsIHRoaWQuY1NTM0RSZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlkLmNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICAgICAgdGhpZC5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gICAgICAgICAgICB0aGlkLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgICAgICAgIHRoaWQuY1NTMkRSZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgICAgICAgICB0aGlkLmNTUzNEUmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICAgICAgdGhpZC5jb250cm9scy50YXJnZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKTtcclxuICAgIH1cclxuICAgIHdlYkdMUmVuZGVyZXIoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgYW50aWFsaWFzOiB0cnVlLCBsb2dhcml0aG1pY0RlcHRoQnVmZmVyOiB0cnVlIH0pO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBjU1MyRFJlbmRlcmVyRnVuKCkge1xyXG4gICAgICAgIHRoaXMuY1NTMkRSZW5kZXJlciA9IG5ldyBDU1MyRFJlbmRlcmVyKCk7XHJcbiAgICAgICAgdGhpcy5jU1MyRFJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jU1MyRFJlbmRlcmVyLmRvbUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIHRoaXMuY1NTMkRSZW5kZXJlci5kb21FbGVtZW50LnN0eWxlLnRvcCA9IFwiMFwiO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jU1MyRFJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgY1NTM0RSZW5kZXJlckZ1bigpIHtcclxuICAgICAgICB0aGlzLmNTUzNEUmVuZGVyZXIgPSBuZXcgQ1NTM0RSZW5kZXJlcigpO1xyXG4gICAgICAgIHRoaXMuY1NTM0RSZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY1NTM0RSZW5kZXJlci5kb21FbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICB0aGlzLmNTUzNEUmVuZGVyZXIuZG9tRWxlbWVudC5zdHlsZS50b3AgPSBcIjBcIjtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY1NTM0RSZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgIH1cclxuICAgIHBlcnNwZWN0aXZlQ2FtZXJhKCkge1xyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDMwLCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMSwgMTAwMDApO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCkpO1xyXG4gICAgfVxyXG4gICAgbGlnaHQoKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQobmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGRmZWJmZiwgMC4zKSk7XHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbmFsTGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZik7XHJcbiAgICAgICAgZGlyZWN0aW9uYWxMaWdodC5wb3NpdGlvbi5zZXQoMCwgNTAwMCwgNTAwMCk7XHJcbiAgICAgICAgZGlyZWN0aW9uYWxMaWdodC5jYXN0U2hhZG93ID0gdHJ1ZTtcclxuICAgICAgICBkaXJlY3Rpb25hbExpZ2h0Lm5hbWUgPSBcImJhc2lzRGlyZWN0aW9uYWxMaWdodFwiO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKGRpcmVjdGlvbmFsTGlnaHQpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKG5ldyBUSFJFRS5DYW1lcmFIZWxwZXIoZGlyZWN0aW9uYWxMaWdodC5zaGFkb3cuY2FtZXJhKSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xyXG4gICAgICAgIHRoaXMuY1NTMkRSZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xyXG4gICAgICAgIHRoaXMuY1NTM0RSZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbHMudXBkYXRlKCk7XHJcbiAgICAgICAgbGV0IHRoaWQgPSB0aGlzO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaWQucmVuZGVyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhZGRFdmVudExpc3RlbmVyKGxpc3RlbmVyT2JqLCBldmVuLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGxldCB0aGlkID0gdGhpcztcclxuICAgICAgICBsaXN0ZW5lck9ialtldmVuXSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBsZXQgcmF5Y2FzdGVyID0gbmV3IFRIUkVFLlJheWNhc3RlcigpO1xyXG4gICAgICAgICAgICBsZXQgbW91c2UgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG4gICAgICAgICAgICBtb3VzZS54ID0gKGV2ZW50W1wiY2xpZW50WFwiXSAvIHRoaWQuY1NTM0RSZW5kZXJlci5kb21FbGVtZW50LmNsaWVudFdpZHRoKSAqIDIgLSAxO1xyXG4gICAgICAgICAgICBtb3VzZS55ID0gLShldmVudFtcImNsaWVudFlcIl0gLyB0aGlkLmNTUzNEUmVuZGVyZXIuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQpICogMiArIDE7XHJcbiAgICAgICAgICAgIHJheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKG1vdXNlLCB0aGlkLmNhbWVyYSk7XHJcbiAgICAgICAgICAgIGxldCBpbnRlcnNlY3RzO1xyXG4gICAgICAgICAgICBpZiAobGlzdGVuZXJPYmoudHlwZSA9PSBcIk1lc2hcIikge1xyXG4gICAgICAgICAgICAgICAgaW50ZXJzZWN0cyA9IHJheWNhc3Rlci5pbnRlcnNlY3RPYmplY3RzKFtsaXN0ZW5lck9ial0sIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGludGVyc2VjdHMgPSByYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0cyhsaXN0ZW5lck9iai5jaGlsZHJlbiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGludGVyc2VjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGxpc3RlbmVyT2JqKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jU1MzRFJlbmRlcmVyLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVuLCBsaXN0ZW5lck9ialtldmVuXSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihsaXN0ZW5lck9iaiwgZXZlbikge1xyXG4gICAgICAgIHRoaXMuY1NTM0RSZW5kZXJlci5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbiwgbGlzdGVuZXJPYmpbZXZlbl0pO1xyXG4gICAgfVxyXG4gICAgbXlBbmltYXRlKGxldmVsLCBvblVwZGF0ZSwgY2FsbGJhY2spIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSAwO1xyXG4gICAgICAgIGxldCBfdmFsdWUgPSAwLjAxICogbGV2ZWw7XHJcbiAgICAgICAgYW5pbWF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZSh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAob25VcGRhdGUpXHJcbiAgICAgICAgICAgICAgICBvblVwZGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSArPSBfdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZS50b0ZpeGVkKDIpKTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhbWVyYUluc3BlY3QodmFsdWUsIHBvc2l0aW9uLCBjYWxsYmFjaykge1xyXG4gICAgICAgIGxldCB0aGlkID0gdGhpcztcclxuICAgICAgICBsZXQgZmxhZyA9IHZhbHVlID49IDA7XHJcbiAgICAgICAgY2FtZXJhSW5zcGVjdEFuaW1hdGUoKTtcclxuICAgICAgICBmdW5jdGlvbiBjYW1lcmFJbnNwZWN0QW5pbWF0ZSgpIHtcclxuICAgICAgICAgICAgaWYgKGZsYWcpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlkLmNhbWVyYS5wb3NpdGlvbi54IDwgcG9zaXRpb25bXCJ4XCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpZC5jYW1lcmEucG9zaXRpb24ueCArPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlkLmNhbWVyYS5wb3NpdGlvbi55IDwgcG9zaXRpb25bXCJ5XCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpZC5jYW1lcmEucG9zaXRpb24ueSArPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlkLmNhbWVyYS5wb3NpdGlvbi56IDwgcG9zaXRpb25bXCJ6XCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpZC5jYW1lcmEucG9zaXRpb24ueiArPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlkLmNhbWVyYS5wb3NpdGlvbi54ID4gcG9zaXRpb25bXCJ4XCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpZC5jYW1lcmEucG9zaXRpb24ueCArPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlkLmNhbWVyYS5wb3NpdGlvbi55ID4gcG9zaXRpb25bXCJ5XCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpZC5jYW1lcmEucG9zaXRpb24ueSArPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlkLmNhbWVyYS5wb3NpdGlvbi56ID4gcG9zaXRpb25bXCJ6XCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpZC5jYW1lcmEucG9zaXRpb24ueiArPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZsYWcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpZC5jYW1lcmEucG9zaXRpb24ueCA+PSBwb3NpdGlvbltcInhcIl0gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpZC5jYW1lcmEucG9zaXRpb24ueSA+PSBwb3NpdGlvbltcInlcIl0gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpZC5jYW1lcmEucG9zaXRpb24ueiA+PSBwb3NpdGlvbltcInpcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlkLmNhbWVyYS5wb3NpdGlvbi54IDw9IHBvc2l0aW9uW1wieFwiXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlkLmNhbWVyYS5wb3NpdGlvbi55IDw9IHBvc2l0aW9uW1wieVwiXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlkLmNhbWVyYS5wb3NpdGlvbi56IDw9IHBvc2l0aW9uW1wielwiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FtZXJhSW5zcGVjdEFuaW1hdGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuZXhwb3J0IGNsYXNzIENvZGVMb2FkZXJTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlID0gc2NlbmVTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgbG9hZENvZGUod2lkdGgsIGhlaWdodCwgZGVwdGgsIG9uTG9hZCkge1xyXG4gICAgICAgIGxldCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3aWR0aCwgaGVpZ2h0LCBkZXB0aCk7XHJcbiAgICAgICAgZ2VvbWV0cnlbd2lkdGhdID0gd2lkdGg7XHJcbiAgICAgICAgZ2VvbWV0cnlbaGVpZ2h0XSA9IGhlaWdodDtcclxuICAgICAgICBnZW9tZXRyeVtkZXB0aF0gPSBkZXB0aDtcclxuICAgICAgICBsZXQgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoKTtcclxuICAgICAgICBsZXQgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcbiAgICAgICAgaWYgKG9uTG9hZClcclxuICAgICAgICAgICAgb25Mb2FkKG1lc2gpO1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLnNjZW5lLmFkZChtZXNoKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGUobWVzaCk7XHJcbiAgICB9XHJcbiAgICBhbmltYXRlKG1lc2gpIHtcclxuICAgICAgICBtZXNoLnJvdGF0aW9uLnkgKz0gMC4wMjtcclxuICAgICAgICBsZXQgdGhpZCA9IHRoaXM7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpZC5hbmltYXRlKG1lc2gpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuaW1wb3J0IHsgRkJYTG9hZGVyIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0ZCWExvYWRlclwiO1xyXG5pbXBvcnQgeyBUR0FMb2FkZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvVEdBTG9hZGVyXCI7XHJcbmltcG9ydCB7IEREU0xvYWRlciB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9ERFNMb2FkZXJcIjtcclxuZXhwb3J0IGNsYXNzIEZCWExvYWRlclNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2UgPSBzY2VuZVNlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBsb2FkRmJ4KHVybCwgb25Mb2FkKSB7XHJcbiAgICAgICAgbGV0IHRoaWQgPSB0aGlzO1xyXG4gICAgICAgIFRIUkVFLkxvYWRlci5IYW5kbGVycy5hZGQoL1xcLnRnYSQvaSwgbmV3IFRHQUxvYWRlcigpKTtcclxuICAgICAgICBUSFJFRS5Mb2FkZXIuSGFuZGxlcnMuYWRkKC9cXC5kZHMkL2ksIG5ldyBERFNMb2FkZXIoKSk7XHJcbiAgICAgICAgbmV3IEZCWExvYWRlcigpLmxvYWQodXJsICsgXCIuZmJ4XCIsIGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKG9uTG9hZClcclxuICAgICAgICAgICAgICAgIG9uTG9hZChvYmplY3QpO1xyXG4gICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5zY2VuZS5hZGQob2JqZWN0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcbmltcG9ydCB7IE1UTExvYWRlciB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9NVExMb2FkZXJcIjtcclxuaW1wb3J0IHsgT0JKTG9hZGVyIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL09CSkxvYWRlclwiO1xyXG5pbXBvcnQgeyBUR0FMb2FkZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvVEdBTG9hZGVyXCI7XHJcbmltcG9ydCB7IEREU0xvYWRlciB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9ERFNMb2FkZXJcIjtcclxuZXhwb3J0IGNsYXNzIE9CSkxvYWRlclNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2UgPSBzY2VuZVNlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBsb2FkT2JqKHVybCwgb25Mb2FkKSB7XHJcbiAgICAgICAgbGV0IHRoaWQgPSB0aGlzO1xyXG4gICAgICAgIFRIUkVFLkxvYWRlci5IYW5kbGVycy5hZGQoL1xcLnRnYSQvaSwgbmV3IFRHQUxvYWRlcigpKTtcclxuICAgICAgICBUSFJFRS5Mb2FkZXIuSGFuZGxlcnMuYWRkKC9cXC5kZHMkL2ksIG5ldyBERFNMb2FkZXIoKSk7XHJcbiAgICAgICAgbmV3IE1UTExvYWRlcigpLmxvYWQodXJsICsgJy5tdGwnLCBmdW5jdGlvbiAobWF0ZXJpYWxzKSB7XHJcbiAgICAgICAgICAgIG1hdGVyaWFscy5wcmVsb2FkKCk7XHJcbiAgICAgICAgICAgIGxldCBvYmpMb2FkZXIgPSBuZXcgT0JKTG9hZGVyKCk7XHJcbiAgICAgICAgICAgIG9iakxvYWRlci5zZXRNYXRlcmlhbHMobWF0ZXJpYWxzKTtcclxuICAgICAgICAgICAgb2JqTG9hZGVyLmxvYWQodXJsICsgJy5vYmonLCBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob25Mb2FkKVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTG9hZChvYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2Uuc2NlbmUuYWRkKG9iamVjdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBDb21tb25VdGlsIHtcclxuICAgIHN0YXRpYyBvYmpJc0VxdWFsKG9iajEsIG9iajIpIHtcclxuICAgICAgICBsZXQgbzEgPSBvYmoxIGluc3RhbmNlb2YgT2JqZWN0O1xyXG4gICAgICAgIGxldCBvMiA9IG9iajIgaW5zdGFuY2VvZiBPYmplY3Q7XHJcbiAgICAgICAgaWYgKCFvMSB8fCAhbzIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9iajEgPT09IG9iajI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhvYmoxKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKG9iajIpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGF0dHIgaW4gb2JqMSkge1xyXG4gICAgICAgICAgICBsZXQgdDEgPSBvYmoxW2F0dHJdIGluc3RhbmNlb2YgT2JqZWN0O1xyXG4gICAgICAgICAgICBsZXQgdDIgPSBvYmoyW2F0dHJdIGluc3RhbmNlb2YgT2JqZWN0O1xyXG4gICAgICAgICAgICBpZiAodDEgJiYgdDIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9iaklzRXF1YWwob2JqMVthdHRyXSwgb2JqMlthdHRyXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAob2JqMVthdHRyXSAhPT0gb2JqMlthdHRyXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=