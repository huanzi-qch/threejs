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
            opacity: 0.8,
            depthTest: false
        });
        let kfCloudGroup = new three__WEBPACK_IMPORTED_MODULE_0__["Group"]();
        for (let i = 0; i < 4000; i++) {
            let plane = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, material);
            plane.position.y = -Math.random() * 500;
            plane.position.x = -Math.random() * 500;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXIvTWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9FYXJ0aFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvUGFya1NlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvU2NlbmVTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlL2xvYWRlci9Db2RlTG9hZGVyU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9sb2FkZXIvRkJYTG9hZGVyU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9sb2FkZXIvT0JKTG9hZGVyU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9Db21tb25VdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDdkpBO0FBQUE7QUFBQTtBQUFBO0FBQXVEO0FBQ0E7QUFDRDtBQUN0RCx1QkFBdUIsa0VBQVk7QUFDbkM7QUFDQSx1QkFBdUIsa0VBQVk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlFQUFZO0FBQzVCLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQStCO0FBQ007QUFDOUI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFhO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCw2Q0FBYTtBQUNuRTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0RBQW9CO0FBQzdDLDJCQUEyQix1REFBdUI7QUFDbEQ7QUFDQSwyQkFBMkIsbURBQW1CO0FBQzlDLCtCQUErQixtREFBbUI7QUFDbEQ7QUFDQSxtQ0FBbUMsbURBQW1CO0FBQ3RELGdDQUFnQywyQ0FBVztBQUMzQztBQUNBLHdCQUF3QiwwQ0FBVTtBQUNsQztBQUNBLDhCQUE4QixvREFBb0I7QUFDbEQsZ0NBQWdDLHVEQUF1QjtBQUN2RCxnQ0FBZ0MsbURBQW1CO0FBQ25EO0FBQ0E7QUFDQSxpQ0FBaUMsc0RBQXNCO0FBQ3ZELDRCQUE0QiwwQ0FBVTtBQUN0QztBQUNBLCtCQUErQixvREFBb0I7QUFDbkQsaUNBQWlDLHVEQUF1QjtBQUN4RCxpQ0FBaUMsbURBQW1CO0FBQ3BEO0FBQ0E7QUFDQSxrQ0FBa0Msc0RBQXNCO0FBQ3hELDZCQUE2QiwwQ0FBVTtBQUN2QztBQUNBO0FBQ0EsNkJBQTZCLG9EQUFvQjtBQUNqRCwrQkFBK0Isb0RBQW9CO0FBQ25EO0FBQ0Esc0JBQXNCLHlCQUF5QjtBQUMvQyxzQkFBc0I7QUFDdEIsYUFBYTtBQUNiLGlEQUFpRCxpQkFBaUIsaURBQWlELDZFQUE2RSxLQUFLO0FBQ3JNLDhDQUE4QyxvQkFBb0IseUJBQXlCLGlCQUFpQiwwRUFBMEUsMkRBQTJELEtBQUs7QUFDdFAsU0FBUztBQUNULDRCQUE0Qiw4Q0FBYztBQUMxQztBQUNBLDJCQUEyQiwwQ0FBVTtBQUNyQztBQUNBO0FBQ0EsOEJBQThCLG9EQUFvQjtBQUNsRCxnQ0FBZ0MsdURBQXVCLEVBQUUsa0JBQWtCO0FBQzNFO0FBQ0EsNEJBQTRCLDBDQUFVO0FBQ3RDO0FBQ0EsaUNBQWlDLDhDQUFjO0FBQy9DLHlDQUF5Qyw2Q0FBYTtBQUN0RDtBQUNBLGlDQUFpQyxvREFBb0I7QUFDckQsaUNBQWlDLG1EQUFtQjtBQUNwRCx1Q0FBdUMsa0RBQWtCO0FBQ3pEO0FBQ0E7QUFDQSx5QkFBeUIsNENBQVk7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMkNBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELDZDQUFhO0FBQy9EO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esc0RBQXNELDZDQUFhO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFhO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELDJDQUFLO0FBQ3RELDJCQUEyQixtREFBbUI7QUFDOUMsMEJBQTBCLG1EQUFtQjtBQUM3Qyw0QkFBNEIsOERBQThCO0FBQzFELDRCQUE0Qiw4REFBOEI7QUFDMUQsMkJBQTJCLHVEQUF1QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCwrQkFBK0IsMkNBQUs7QUFDcEMsdUJBQXVCLFVBQVU7QUFDakMsNEJBQTRCLDBDQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCw2Q0FBYTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErRDtBQUNmO0FBQ2pCO0FBQzBDO0FBQzdDO0FBQzZDO0FBQ1o7QUFDQTtBQUN0RDtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsdURBQXVCO0FBQ3hFO0FBQ0EsNENBQTRDLDZDQUFhO0FBQ3pELGdEQUFnRCw2Q0FBYTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsbURBQW1CO0FBQ25ELG9EQUFvRCxvREFBb0I7QUFDeEU7QUFDQTtBQUNBLGlDQUFpQyx5REFBeUIsRUFBRSxxQkFBcUI7QUFDakYsdUJBQXVCLDBDQUFVLEtBQUsseURBQXlCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQywyRUFBaUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyREFBVTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyw2Q0FBYTtBQUN2RDtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELHNGQUFXLENBQUMsbUNBQUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJEQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDZDQUFhO0FBQ3ZEO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Qsc0ZBQVcsQ0FBQyxtQ0FBQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULG1DQUFtQyx5RUFBZ0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyREFBVTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyw2Q0FBYTtBQUN2RDtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELHNGQUFXLENBQUMsbUNBQUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxtQ0FBbUMseUVBQWdCO0FBQ25EO0FBQ0E7QUFDQSw0Q0FBNEMsb0RBQW9CO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYiw0QkFBNEIsMkNBQVc7QUFDdkMsNEJBQTRCLG9EQUFvQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJEQUFVO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDZDQUFhO0FBQ3ZEO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Qsc0ZBQVcsQ0FBQyxtQ0FBQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBQzJDO0FBQ0M7QUFDQTtBQUNwRTtBQUNQO0FBQ0EseUJBQXlCLDJDQUFXO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHVGQUFhO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxtQ0FBbUMsNkNBQWE7QUFDaEQ7QUFDQTtBQUNBLDRCQUE0QixtREFBbUIsRUFBRSxnREFBZ0Q7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx3RkFBYTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsd0ZBQWE7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHVEQUF1QjtBQUNqRDtBQUNBLCtCQUErQiw2Q0FBYTtBQUM1QztBQUNBO0FBQ0EsMkJBQTJCLGtEQUFrQjtBQUM3QyxtQ0FBbUMsc0RBQXNCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtEQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywrQ0FBZTtBQUMvQyw0QkFBNEIsNkNBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pLQTtBQUFBO0FBQUE7QUFBK0I7QUFDeEI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpREFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHVEQUF1QjtBQUNsRCx1QkFBdUIsMENBQVU7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDa0M7QUFDQTtBQUNBO0FBQzFEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNENBQVksNkJBQTZCLDhFQUFTO0FBQzFELFFBQVEsNENBQVksNkJBQTZCLDhFQUFTO0FBQzFELFlBQVksOEVBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDa0M7QUFDQTtBQUNBO0FBQ0E7QUFDMUQ7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0Q0FBWSw2QkFBNkIsOEVBQVM7QUFDMUQsUUFBUSw0Q0FBWSw2QkFBNkIsOEVBQVM7QUFDMUQsWUFBWSw4RUFBUztBQUNyQjtBQUNBLGdDQUFnQyw4RUFBUztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2NvbnRyb2xsZXIvTWFpbi50c1wiLFwidmVuZG9ycy1tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IHsgU2NlbmVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2UvU2NlbmVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEVhcnRoU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlL0VhcnRoU2VydmljZVwiO1xyXG5pbXBvcnQgeyBQYXJya1NlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZS9QYXJrU2VydmljZVwiO1xyXG5sZXQgc2NlbmVTZXJ2aWNlID0gbmV3IFNjZW5lU2VydmljZSgpO1xyXG5zY2VuZVNlcnZpY2UuaW5pdFNjZW5lKCk7XHJcbmxldCBlYXJ0aFNlcnZpY2UgPSBuZXcgRWFydGhTZXJ2aWNlKHNjZW5lU2VydmljZSk7XHJcbmVhcnRoU2VydmljZS5sb2FkRWFydGgoNSwgZnVuY3Rpb24gKGdyb3VwKSB7XHJcbiAgICBncm91cC5yb3RhdGlvbi5zZXQoLU1hdGguUEkgLyA4LCAtTWF0aC5QSSAvIDEuNjMsIDApO1xyXG4gICAgc2NlbmVTZXJ2aWNlLmFkZEV2ZW50TGlzdGVuZXIoZ3JvdXAsIFwiZGJsY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5Zyw55CD6KKr6byg5qCH5Y+M5Ye7XCIpO1xyXG4gICAgICAgIGVhcnRoU2VydmljZS5kYmxjbGlja0VhcnRoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLliqDovb3lm63ljLouLi5cIik7XHJcbiAgICAgICAgICAgIG5ldyBQYXJya1NlcnZpY2Uoc2NlbmVTZXJ2aWNlKS5sb2FkUGFycmsoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcclxud2luZG93W1wic2NlbmVTZXJ2aWNlXCJdID0gc2NlbmVTZXJ2aWNlO1xyXG53aW5kb3dbXCJlYXJ0aFNlcnZpY2VcIl0gPSBlYXJ0aFNlcnZpY2U7XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyBDb2xvciwgR3JvdXAgfSBmcm9tIFwidGhyZWVcIjtcclxuZXhwb3J0IGNsYXNzIEVhcnRoU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnNjZW5lU2VydmljZSA9IHNjZW5lU2VydmljZTtcclxuICAgIH1cclxuICAgIHVwZGF0ZVNjZW5lKCkge1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLmNhbWVyYS5wb3NpdGlvbi5zZXQoODAsIDAsIDApO1xyXG4gICAgICAgIGxldCB2ZWN0b3IzID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2UuY2FtZXJhLmxvb2tBdCh2ZWN0b3IzKTtcclxuICAgICAgICB0aGlzLnNjZW5lU2VydmljZS5jb250cm9scy50YXJnZXQgPSB2ZWN0b3IzO1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLmVuYWJsZVpvb20gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLmVuYWJsZVJvdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2UuY29udHJvbHMuZW5hYmxlUGFuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2UuY29udHJvbHMuZW5hYmxlS2V5cyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJO1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLm1pbkRpc3RhbmNlID0gMTA7XHJcbiAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2UuY29udHJvbHMubWF4RGlzdGFuY2UgPSA4MDtcclxuICAgICAgICB0aGlzLmVhcnRoUm90YXRlc1N0ZWFkaWx5Q2FtZXJhUG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMyg0MCwgMCwgMCk7XHJcbiAgICB9XHJcbiAgICBsb2FkRWFydGgocmFkaXVzLCBvbkxvYWQpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNjZW5lKCk7XHJcbiAgICAgICAgbGV0IHNwaGVyZSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeShyYWRpdXMsIDQwLCA0MCk7XHJcbiAgICAgICAgbGV0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKCk7XHJcbiAgICAgICAgbWF0ZXJpYWwudHJhbnNwYXJlbnQgPSB0cnVlO1xyXG4gICAgICAgIG1hdGVyaWFsLm1hcCA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZCgnL2ltYWdlcy9lYXJ0aC9lYXJ0aDQuanBnJyk7XHJcbiAgICAgICAgbWF0ZXJpYWwuYnVtcE1hcCA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZCgnL2ltYWdlcy9lYXJ0aC9lYXJ0aF9idW1wLmpwZycpO1xyXG4gICAgICAgIG1hdGVyaWFsLmJ1bXBTY2FsZSA9IDAuMTU7XHJcbiAgICAgICAgbWF0ZXJpYWwuc3BlY3VsYXJNYXAgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpLmxvYWQoJy9pbWFnZXMvZWFydGgvZWFydGhfc3BlYy5qcGcnKTtcclxuICAgICAgICBtYXRlcmlhbC5zcGVjdWxhciA9IG5ldyBUSFJFRS5Db2xvcignIzkwOTA5MCcpO1xyXG4gICAgICAgIG1hdGVyaWFsLnNoaW5pbmVzcyA9IDU7XHJcbiAgICAgICAgbGV0IGVhcnRoID0gbmV3IFRIUkVFLk1lc2goc3BoZXJlLCBtYXRlcmlhbCk7XHJcbiAgICAgICAgZWFydGgubmFtZSA9ICdlYXJ0aCc7XHJcbiAgICAgICAgbGV0IGNsb3VkU3BoZXJlID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KHJhZGl1cyArIDAuMSwgNDAsIDQwKTtcclxuICAgICAgICBsZXQgY2xvdWRNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCgpO1xyXG4gICAgICAgIGNsb3VkTWF0ZXJpYWwubWFwID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKCcvaW1hZ2VzL2VhcnRoL2VhcnRoX2Nsb3VkLnBuZycpO1xyXG4gICAgICAgIGNsb3VkTWF0ZXJpYWwudHJhbnNwYXJlbnQgPSB0cnVlO1xyXG4gICAgICAgIGNsb3VkTWF0ZXJpYWwub3BhY2l0eSA9IDE7XHJcbiAgICAgICAgY2xvdWRNYXRlcmlhbC5ibGVuZGluZyA9IFRIUkVFLkFkZGl0aXZlQmxlbmRpbmc7XHJcbiAgICAgICAgbGV0IGNsb3VkTWVzaCA9IG5ldyBUSFJFRS5NZXNoKGNsb3VkU3BoZXJlLCBjbG91ZE1hdGVyaWFsKTtcclxuICAgICAgICBjbG91ZE1lc2gubmFtZSA9IFwiZWFydGhfY2xvdWQxXCI7XHJcbiAgICAgICAgbGV0IGNsb3VkU3BoZXJlMiA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeShyYWRpdXMgKyAwLjIsIDQwLCA0MCk7XHJcbiAgICAgICAgbGV0IGNsb3VkTWF0ZXJpYWwyID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKCk7XHJcbiAgICAgICAgY2xvdWRNYXRlcmlhbDIubWFwID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKCcvaW1hZ2VzL2VhcnRoL2VhcnRoX2Nsb3VkLnBuZycpO1xyXG4gICAgICAgIGNsb3VkTWF0ZXJpYWwyLnRyYW5zcGFyZW50ID0gdHJ1ZTtcclxuICAgICAgICBjbG91ZE1hdGVyaWFsMi5vcGFjaXR5ID0gMTtcclxuICAgICAgICBjbG91ZE1hdGVyaWFsMi5ibGVuZGluZyA9IFRIUkVFLkFkZGl0aXZlQmxlbmRpbmc7XHJcbiAgICAgICAgbGV0IGNsb3VkTWVzaDIgPSBuZXcgVEhSRUUuTWVzaChjbG91ZFNwaGVyZTIsIGNsb3VkTWF0ZXJpYWwyKTtcclxuICAgICAgICBjbG91ZE1lc2gyLm5hbWUgPSBcImVhcnRoX2Nsb3VkMlwiO1xyXG4gICAgICAgIGNsb3VkTWVzaDIucm90YXRpb24ueSA9IE1hdGguUEk7XHJcbiAgICAgICAgbGV0IGdsb3dTcGhlcmUgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkocmFkaXVzLCA0MCwgNDApO1xyXG4gICAgICAgIGxldCBnbG93TWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICB1bmlmb3Jtczoge1xyXG4gICAgICAgICAgICAgICAgJ2MnOiB7IHR5cGU6ICdmJywgdmFsdWU6IDAuMzQgfSxcclxuICAgICAgICAgICAgICAgICdwJzogeyB0eXBlOiAnZicsIHZhbHVlOiA5LjE3IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdmVydGV4U2hhZGVyOiBbJ3ZhcnlpbmcgdmVjMyB2Tm9ybWFsOycsICd2b2lkIG1haW4oKSB7JywgJ3ZOb3JtYWwgPSBub3JtYWxpemUoIG5vcm1hbE1hdHJpeCAqIG5vcm1hbCApOycsICdnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7JywgJ30nXS5qb2luKCdcXG4nKSxcclxuICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IFsndW5pZm9ybSBmbG9hdCBjOycsICd1bmlmb3JtIGZsb2F0IHA7JywgJ3ZhcnlpbmcgdmVjMyB2Tm9ybWFsOycsICd2b2lkIG1haW4oKSB7JywgJ2Zsb2F0IGludGVuc2l0eSA9IHBvdyggYyAtIGRvdCggdk5vcm1hbCwgdmVjMyggMC4wLCAwLjAsIDEuMCApICksIHAgKTsnLCAnZ2xfRnJhZ0NvbG9yID0gdmVjNCggMC4yLCAwLjU4LCAwLjksIDAuMyApICogaW50ZW5zaXR5OycsICd9J10uam9pbignXFxuJylcclxuICAgICAgICB9KTtcclxuICAgICAgICBnbG93TWF0ZXJpYWwuc2lkZSA9IFRIUkVFLkJhY2tTaWRlO1xyXG4gICAgICAgIGdsb3dNYXRlcmlhbC50cmFuc3BhcmVudCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBnbG93TWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdsb3dTcGhlcmUsIGdsb3dNYXRlcmlhbCk7XHJcbiAgICAgICAgZ2xvd01lc2guc2NhbGUueCA9IGdsb3dNZXNoLnNjYWxlLnkgPSBnbG93TWVzaC5zY2FsZS56ID0gMS4zO1xyXG4gICAgICAgIGdsb3dNZXNoLm5hbWUgPSAnZ2xvdyc7XHJcbiAgICAgICAgbGV0IGJsYWNrU3BoZXJlID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KHJhZGl1cywgNDAsIDQwKTtcclxuICAgICAgICBsZXQgYmxhY2tNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAweDAwMDAwMCB9KTtcclxuICAgICAgICBibGFja01hdGVyaWFsLnRyYW5zcGFyZW50ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGJsYWNrTWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJsYWNrU3BoZXJlLCBibGFja01hdGVyaWFsKTtcclxuICAgICAgICBibGFja01lc2gubmFtZSA9ICdibGFjayc7XHJcbiAgICAgICAgbGV0IHBvaW50c0dlb21ldHJ5ID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcbiAgICAgICAgcG9pbnRzR2VvbWV0cnkudmVydGljZXMucHVzaChuZXcgVEhSRUUuVmVjdG9yMygtKHJhZGl1cyAvIDEuNSkgKyAxLjIsIChyYWRpdXMgLyAxLjUpIC0gMC44LCAtKHJhZGl1cyAvIDEuNSkgLSAxKSk7XHJcbiAgICAgICAgcG9pbnRzR2VvbWV0cnkuY29tcHV0ZUJvdW5kaW5nU3BoZXJlKCk7XHJcbiAgICAgICAgbGV0IHBvaW50c01hdGVyaWFsID0gbmV3IFRIUkVFLlBvaW50c01hdGVyaWFsKCk7XHJcbiAgICAgICAgcG9pbnRzTWF0ZXJpYWwubWFwID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKCcvaW1hZ2VzL2VhcnRoL2lfbWFyaWFuYS5wbmcnKTtcclxuICAgICAgICBwb2ludHNNYXRlcmlhbC5tYXAubWluRmlsdGVyID0gVEhSRUUuTGluZWFyRmlsdGVyO1xyXG4gICAgICAgIHBvaW50c01hdGVyaWFsLnNpemUgPSA0O1xyXG4gICAgICAgIHBvaW50c01hdGVyaWFsLnRyYW5zcGFyZW50ID0gdHJ1ZTtcclxuICAgICAgICBsZXQgcG9pbnRzID0gbmV3IFRIUkVFLlBvaW50cyhwb2ludHNHZW9tZXRyeSwgcG9pbnRzTWF0ZXJpYWwpO1xyXG4gICAgICAgIHBvaW50cy5uYW1lID0gXCLmsJTljovnq5lcIjtcclxuICAgICAgICB0aGlzLmVhcnRoID0gZWFydGg7XHJcbiAgICAgICAgdGhpcy5jbG91ZCA9IGNsb3VkTWVzaDtcclxuICAgICAgICB0aGlzLmNsb3VkMiA9IGNsb3VkTWVzaDI7XHJcbiAgICAgICAgbGV0IGdyb3VwID0gbmV3IFRIUkVFLkdyb3VwKCk7XHJcbiAgICAgICAgZWFydGguYWRkKHBvaW50cyk7XHJcbiAgICAgICAgZ3JvdXAuYWRkKGVhcnRoKTtcclxuICAgICAgICBncm91cC5hZGQoY2xvdWRNZXNoKTtcclxuICAgICAgICBncm91cC5hZGQoY2xvdWRNZXNoMik7XHJcbiAgICAgICAgdGhpcy5ncm91cCA9IGdyb3VwO1xyXG4gICAgICAgIGlmIChvbkxvYWQpXHJcbiAgICAgICAgICAgIG9uTG9hZChncm91cCk7XHJcbiAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2Uuc2NlbmUuYWRkKGdyb3VwKTtcclxuICAgICAgICB0aGlzLmluaXRBbmltYXRlKCk7XHJcbiAgICB9XHJcbiAgICBpbml0QW5pbWF0ZSgpIHtcclxuICAgICAgICBsZXQgdGhpZCA9IHRoaXM7XHJcbiAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UuY2FtZXJhSW5zcGVjdCgtMC41LCBuZXcgVEhSRUUuVmVjdG9yMyh0aGlkLmVhcnRoUm90YXRlc1N0ZWFkaWx5Q2FtZXJhUG9zaXRpb24ueCwgdGhpZC5lYXJ0aFJvdGF0ZXNTdGVhZGlseUNhbWVyYVBvc2l0aW9uLnksIHRoaWQuZWFydGhSb3RhdGVzU3RlYWRpbHlDYW1lcmFQb3NpdGlvbi56KSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlkLmF1dG9Sb3RhdGlvbkFuaW1hdGVQbGF5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhdXRvUm90YXRpb25BbmltYXRlUGxheSgpIHtcclxuICAgICAgICB0aGlzLmVhcnRoLnJvdGF0aW9uLnkgKz0gMC4wMDE7XHJcbiAgICAgICAgdGhpcy5jbG91ZC5yb3RhdGlvbi55ICs9IDAuMDAwNTtcclxuICAgICAgICB0aGlzLmNsb3VkMi5yb3RhdGlvbi55ICs9IDAuMDAwNTtcclxuICAgICAgICBsZXQgbnVtYmVyID0gMC4wMDc7XHJcbiAgICAgICAgaWYgKE51bWJlcih0aGlzLnNjZW5lU2VydmljZS5jYW1lcmEucG9zaXRpb24ueC50b0ZpeGVkKDMpKSAhPT0gdGhpcy5lYXJ0aFJvdGF0ZXNTdGVhZGlseUNhbWVyYVBvc2l0aW9uLngpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2NlbmVTZXJ2aWNlLmNhbWVyYS5wb3NpdGlvbi54IDwgdGhpcy5lYXJ0aFJvdGF0ZXNTdGVhZGlseUNhbWVyYVBvc2l0aW9uLngpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLmNhbWVyYS5wb3NpdGlvbi54ICs9IG51bWJlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zY2VuZVNlcnZpY2UuY2FtZXJhLnBvc2l0aW9uLnggPiB0aGlzLmVhcnRoUm90YXRlc1N0ZWFkaWx5Q2FtZXJhUG9zaXRpb24ueCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2UuY2FtZXJhLnBvc2l0aW9uLnggLT0gbnVtYmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChOdW1iZXIodGhpcy5zY2VuZVNlcnZpY2UuY2FtZXJhLnBvc2l0aW9uLnkudG9GaXhlZCgzKSkgIT09IHRoaXMuZWFydGhSb3RhdGVzU3RlYWRpbHlDYW1lcmFQb3NpdGlvbi55KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNjZW5lU2VydmljZS5jYW1lcmEucG9zaXRpb24ueSA8IHRoaXMuZWFydGhSb3RhdGVzU3RlYWRpbHlDYW1lcmFQb3NpdGlvbi55KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lU2VydmljZS5jYW1lcmEucG9zaXRpb24ueSArPSBudW1iZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2NlbmVTZXJ2aWNlLmNhbWVyYS5wb3NpdGlvbi55ID4gdGhpcy5lYXJ0aFJvdGF0ZXNTdGVhZGlseUNhbWVyYVBvc2l0aW9uLnkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLmNhbWVyYS5wb3NpdGlvbi55IC09IG51bWJlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoTnVtYmVyKHRoaXMuc2NlbmVTZXJ2aWNlLmNhbWVyYS5wb3NpdGlvbi56LnRvRml4ZWQoMykpICE9PSB0aGlzLmVhcnRoUm90YXRlc1N0ZWFkaWx5Q2FtZXJhUG9zaXRpb24ueikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zY2VuZVNlcnZpY2UuY2FtZXJhLnBvc2l0aW9uLnogPCB0aGlzLmVhcnRoUm90YXRlc1N0ZWFkaWx5Q2FtZXJhUG9zaXRpb24ueikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2UuY2FtZXJhLnBvc2l0aW9uLnogKz0gbnVtYmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNjZW5lU2VydmljZS5jYW1lcmEucG9zaXRpb24ueiA+IHRoaXMuZWFydGhSb3RhdGVzU3RlYWRpbHlDYW1lcmFQb3NpdGlvbi56KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lU2VydmljZS5jYW1lcmEucG9zaXRpb24ueiAtPSBudW1iZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRoaWQgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lRmxhZyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaWQuYXV0b1JvdGF0aW9uQW5pbWF0ZVBsYXkoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGRibGNsaWNrRWFydGgoY2FsbGJhY2spIHtcclxuICAgICAgICBsZXQgdGhpZCA9IHRoaXM7XHJcbiAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UuY29udHJvbHMuZW5hYmxlWm9vbSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLmVuYWJsZVJvdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLmVuYWJsZVBhbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLmVuYWJsZUtleXMgPSBmYWxzZTtcclxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlkLnJlcXVlc3RBbmltYXRpb25GcmFtZUZsYWcpO1xyXG4gICAgICAgIGxldCBvbGRQb3NpdGlvbiA9IHRoaWQuc2NlbmVTZXJ2aWNlLmNhbWVyYS5wb3NpdGlvbjtcclxuICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSB7IHg6IDQwLCB5OiAwLCB6OiAwIH07XHJcbiAgICAgICAgbGV0IG9sZFJvdGF0aW9uID0gdGhpZC5lYXJ0aC5yb3RhdGlvbjtcclxuICAgICAgICBsZXQgbmV3Um90YXRpb24gPSB7IHg6IDAsIHk6IDAsIHo6IDAgfTtcclxuICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5teUFuaW1hdGUoMSwgZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbl94ID0gb2xkUG9zaXRpb24ueCArIChuZXdQb3NpdGlvbi54IC0gb2xkUG9zaXRpb24ueCkgKiB2YWx1ZTtcclxuICAgICAgICAgICAgbGV0IHBvc2l0aW9uX3kgPSBvbGRQb3NpdGlvbi55ICsgKG5ld1Bvc2l0aW9uLnkgLSBvbGRQb3NpdGlvbi55KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgcG9zaXRpb25feiA9IG9sZFBvc2l0aW9uLnogKyAobmV3UG9zaXRpb24ueiAtIG9sZFBvc2l0aW9uLnopICogdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLmNhbWVyYS5wb3NpdGlvbi5zZXQocG9zaXRpb25feCwgcG9zaXRpb25feSwgcG9zaXRpb25feik7XHJcbiAgICAgICAgICAgIGxldCByb3RhdGlvbl94ID0gb2xkUm90YXRpb24ueCArIChuZXdSb3RhdGlvbi54IC0gb2xkUm90YXRpb24ueCkgKiB2YWx1ZTtcclxuICAgICAgICAgICAgbGV0IHJvdGF0aW9uX3kgPSBvbGRSb3RhdGlvbi55ICsgKG5ld1JvdGF0aW9uLnkgLSBvbGRSb3RhdGlvbi55KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICBsZXQgcm90YXRpb25feiA9IG9sZFJvdGF0aW9uLnogKyAobmV3Um90YXRpb24ueiAtIG9sZFJvdGF0aW9uLnopICogdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaWQuZWFydGgucm90YXRpb24uc2V0KHJvdGF0aW9uX3gsIHJvdGF0aW9uX3ksIHJvdGF0aW9uX3opO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IG9sZFBvc2l0aW9uID0gdGhpZC5zY2VuZVNlcnZpY2UuY2FtZXJhLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5jYW1lcmFJbnNwZWN0KC0wLjUsIG5ldyBUSFJFRS5WZWN0b3IzKDEwLCBvbGRQb3NpdGlvbi55LCBvbGRQb3NpdGlvbi56KSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpZC5ncm91cC50cmF2ZXJzZShmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai50eXBlID09PSAnTWVzaCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW1wiZ2VvbWV0cnlcIl0uZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbXCJtYXRlcmlhbFwiXS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5zY2VuZS5yZW1vdmUodGhpZC5ncm91cCk7XHJcbiAgICAgICAgICAgICAgICB0aGlkLmtmQ2xvdWRBbmltYXRlKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBrZkNsb3VkQW5pbWF0ZShjYWxsYmFjaykge1xyXG4gICAgICAgIGxldCB0aGlkID0gdGhpcztcclxuICAgICAgICBsZXQgdmVjdG9yMyA9IG5ldyBUSFJFRS5WZWN0b3IzKC01MDAwLCAtNDAwMCwgMCk7XHJcbiAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UuY2FtZXJhLmxvb2tBdCh2ZWN0b3IzKTtcclxuICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5jb250cm9scy50YXJnZXQgPSB2ZWN0b3IzO1xyXG4gICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLm1pbkRpc3RhbmNlID0gMDtcclxuICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5jb250cm9scy5tYXhEaXN0YW5jZSA9IDgwMDA7XHJcbiAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2Uuc2NlbmUuYmFja2dyb3VuZCA9IG5ldyBDb2xvcihcIiMzMjY2OTZcIik7XHJcbiAgICAgICAgbGV0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoNTAsIDQ1LCAzMiwgMzIpO1xyXG4gICAgICAgIGxldCB0ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKCcvaW1hZ2VzL2VhcnRoL2Nsb3VkLnBuZycpO1xyXG4gICAgICAgIHRleHR1cmUubWFnRmlsdGVyID0gVEhSRUUuTGluZWFyTWlwTWFwTGluZWFyRmlsdGVyO1xyXG4gICAgICAgIHRleHR1cmUubWluRmlsdGVyID0gVEhSRUUuTGluZWFyTWlwTWFwTGluZWFyRmlsdGVyO1xyXG4gICAgICAgIGxldCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgIG1hcDogdGV4dHVyZSxcclxuICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuOCxcclxuICAgICAgICAgICAgZGVwdGhUZXN0OiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBrZkNsb3VkR3JvdXAgPSBuZXcgR3JvdXAoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQwMDA7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcGxhbmUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICBwbGFuZS5wb3NpdGlvbi55ID0gLU1hdGgucmFuZG9tKCkgKiA1MDA7XHJcbiAgICAgICAgICAgIHBsYW5lLnBvc2l0aW9uLnggPSAtTWF0aC5yYW5kb20oKSAqIDUwMDtcclxuICAgICAgICAgICAgcGxhbmUucG9zaXRpb24ueiA9IGkgJSAyID09PSAwID8gTWF0aC5yYW5kb20oKSAqIDUwMCA6IC1NYXRoLnJhbmRvbSgpICogNTAwO1xyXG4gICAgICAgICAgICBwbGFuZS5yb3RhdGlvbi55ID0gTWF0aC5QSSAvIDI7XHJcbiAgICAgICAgICAgIHBsYW5lLnNjYWxlLnogPSBwbGFuZS5zY2FsZS55ID0gTWF0aC5yYW5kb20oKSAqIE1hdGgucmFuZG9tKCkgKiAxLjUgKyAwLjU7XHJcbiAgICAgICAgICAgIGtmQ2xvdWRHcm91cC5hZGQocGxhbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5zY2VuZS5hZGQoa2ZDbG91ZEdyb3VwKTtcclxuICAgICAgICB3aW5kb3dbXCJrZkNsb3VkR3JvdXBcIl0gPSBrZkNsb3VkR3JvdXA7XHJcbiAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UuY2FtZXJhSW5zcGVjdCgtMTUsIG5ldyBUSFJFRS5WZWN0b3IzKC01NTAsIC01NTAsIDApLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGtmQ2xvdWRHcm91cC50cmF2ZXJzZShmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqLnR5cGUgPT09ICdNZXNoJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ialtcImdlb21ldHJ5XCJdLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBvYmpbXCJtYXRlcmlhbFwiXS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5zY2VuZS5yZW1vdmUoa2ZDbG91ZEdyb3VwKTtcclxuICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlkLmdyb3VwLCBcImRibGNsaWNrXCIpO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvZGVMb2FkZXJTZXJ2aWNlIH0gZnJvbSBcIi4vbG9hZGVyL0NvZGVMb2FkZXJTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tIFwiLi4vdXRpbC9Db21tb25VdGlsXCI7XHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyBDU1MyRE9iamVjdCB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vcmVuZGVyZXJzL0NTUzJEUmVuZGVyZXJcIjtcclxuaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCB7IENTUzNET2JqZWN0IH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9yZW5kZXJlcnMvQ1NTM0RSZW5kZXJlclwiO1xyXG5pbXBvcnQgeyBPQkpMb2FkZXJTZXJ2aWNlIH0gZnJvbSBcIi4vbG9hZGVyL09CSkxvYWRlclNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRkJYTG9hZGVyU2VydmljZSB9IGZyb20gXCIuL2xvYWRlci9GQlhMb2FkZXJTZXJ2aWNlXCI7XHJcbmV4cG9ydCBjbGFzcyBQYXJya1NlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2UgPSBzY2VuZVNlcnZpY2U7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVTY2VuZSgpIHtcclxuICAgICAgICBsZXQgcGF0aCA9IFwiL2ltYWdlcy9za3lib3gvXCI7XHJcbiAgICAgICAgbGV0IGZvcm1hdCA9ICcuanBnJztcclxuICAgICAgICBsZXQgdXJscyA9IFtcclxuICAgICAgICAgICAgcGF0aCArICdweCcgKyBmb3JtYXQsIHBhdGggKyAnbngnICsgZm9ybWF0LFxyXG4gICAgICAgICAgICBwYXRoICsgJ3B5JyArIGZvcm1hdCwgcGF0aCArICdueScgKyBmb3JtYXQsXHJcbiAgICAgICAgICAgIHBhdGggKyAncHonICsgZm9ybWF0LCBwYXRoICsgJ256JyArIGZvcm1hdFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2Uuc2NlbmUuYmFja2dyb3VuZCA9IG5ldyBUSFJFRS5DdWJlVGV4dHVyZUxvYWRlcigpLmxvYWQodXJscyk7XHJcbiAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2UuY2FtZXJhLnBvc2l0aW9uLnNldCg1MDAsIDUwMCwgNTAwKTtcclxuICAgICAgICB0aGlzLnNjZW5lU2VydmljZS5jYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApKTtcclxuICAgICAgICB0aGlzLnNjZW5lU2VydmljZS5jb250cm9scy50YXJnZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnNjZW5lU2VydmljZS5jb250cm9scy5lbmFibGVab29tID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNjZW5lU2VydmljZS5jb250cm9scy5lbmFibGVSb3RhdGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLmVuYWJsZVBhbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2UuY29udHJvbHMuZW5hYmxlS2V5cyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zY2VuZVNlcnZpY2UuY29udHJvbHMua2V5UGFuU3BlZWQgPSA3O1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJICogMC41O1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLm1pbkRpc3RhbmNlID0gMTAwO1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLm1heERpc3RhbmNlID0gNTAwMDtcclxuICAgIH1cclxuICAgIGxvYWRQYXJyaygpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNjZW5lKCk7XHJcbiAgICAgICAgbGV0IHRoaWQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBncm91bmRUZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKFwiL2ltYWdlcy9taW5lY3JhZnQvZ3Jhc3NsaWdodC1iaWcuanBnXCIpO1xyXG4gICAgICAgIGdyb3VuZFRleHR1cmUud3JhcFMgPSBncm91bmRUZXh0dXJlLndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcbiAgICAgICAgZ3JvdW5kVGV4dHVyZS5yZXBlYXQuc2V0KDI1LCAyNSk7XHJcbiAgICAgICAgZ3JvdW5kVGV4dHVyZS5hbmlzb3Ryb3B5ID0gMTY7XHJcbiAgICAgICAgbGV0IGdyb3VuZE1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoeyBtYXA6IGdyb3VuZFRleHR1cmUgfSk7XHJcbiAgICAgICAgbGV0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSgyMDAwMCwgMjAwMDApLCBncm91bmRNYXRlcmlhbCk7XHJcbiAgICAgICAgbWVzaC5yb3RhdGlvbi54ID0gLU1hdGguUEkgLyAyO1xyXG4gICAgICAgIG1lc2gucmVjZWl2ZVNoYWRvdyA9IHRydWU7XHJcbiAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2Uuc2NlbmUuYWRkKG1lc2gpO1xyXG4gICAgICAgIGxldCBjb2RlTG9hZGVyU2VydmljZSA9IG5ldyBDb2RlTG9hZGVyU2VydmljZSh0aGlkLnNjZW5lU2VydmljZSk7XHJcbiAgICAgICAgY29kZUxvYWRlclNlcnZpY2UubG9hZENvZGUoNzAsIDcwLCA3MCwgZnVuY3Rpb24gKG1lc2gpIHtcclxuICAgICAgICAgICAgbWVzaC5wb3NpdGlvbi5zZXQoLTEwMCwgMTAwLCAwKTtcclxuICAgICAgICAgICAgbWVzaC5jYXN0U2hhZG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgbWVzaC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UuYWRkRXZlbnRMaXN0ZW5lcihtZXNoLCBcImNsaWNrXCIsIGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi56uL5pa55L2T5a+56LGh6KKr6byg5qCH54K55Ye7XCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9sZExvb2tBdCA9IHRoaWQuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLnRhcmdldDtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdMb29rQXQgPSBvYmplY3QucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBpZiAoIUNvbW1vblV0aWwub2JqSXNFcXVhbChvbGRMb29rQXQsIG5ld0xvb2tBdCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5teUFuaW1hdGUoMiwgZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb29rQXRfeCA9IG9sZExvb2tBdC54ICsgKG5ld0xvb2tBdC54IC0gb2xkTG9va0F0LngpICogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb29rQXRfeSA9IG9sZExvb2tBdC55ICsgKG5ld0xvb2tBdC55IC0gb2xkTG9va0F0LnkpICogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsb29rQXRfeiA9IG9sZExvb2tBdC56ICsgKG5ld0xvb2tBdC56IC0gb2xkTG9va0F0LnopICogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2ZWN0b3IzID0gbmV3IFRIUkVFLlZlY3RvcjMobG9va0F0X3gsIGxvb2tBdF95LCBsb29rQXRfeik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLmNhbWVyYS5sb29rQXQodmVjdG9yMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLnRhcmdldCA9IHZlY3RvcjM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2xkUG9zaXRpb24gPSB0aGlkLnNjZW5lU2VydmljZS5jYW1lcmEucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IG9iamVjdC5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UubXlBbmltYXRlKDIsIGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhbWVyYUJhY2tEaXN0X3ggPSA4MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FtZXJhQmFja0Rpc3RfeSA9IDMwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYW1lcmFCYWNrRGlzdF96ID0gODAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uX3ggPSBvbGRQb3NpdGlvbi54ICsgKG5ld1Bvc2l0aW9uLnggKyBjYW1lcmFCYWNrRGlzdF94IC0gb2xkUG9zaXRpb24ueCkgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbl95ID0gb2xkUG9zaXRpb24ueSArIChuZXdQb3NpdGlvbi55ICsgY2FtZXJhQmFja0Rpc3RfeSAtIG9sZFBvc2l0aW9uLnkpICogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb25feiA9IG9sZFBvc2l0aW9uLnogKyAobmV3UG9zaXRpb24ueiArIGNhbWVyYUJhY2tEaXN0X3ogLSBvbGRQb3NpdGlvbi56KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UuY2FtZXJhLnBvc2l0aW9uLnNldChwb3NpdGlvbl94LCBwb3NpdGlvbl95LCBwb3NpdGlvbl96KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLmNvbnRyb2xzLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWKqOeUu+aSreaUvuWujOavlVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBodG1sID0gXCI8ZGl2IGNsYXNzPVxcXCJlbGVtZW50XFxcIj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPVxcXCJudW1iZXJcXFwiPue8luWPt++8mjAwMTwvZGl2PlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9XFxcInN5bWJvbFxcXCI+56uL5pa55L2TPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPGRpdiBjbGFzcz1cXFwiZGV0YWlsc1xcXCI+5pmu6YCa55qE56uL5pa55L2T77yMMkTnmoRsYWJlbDwvZGl2PlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjwvZGl2PlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNTUzJET2JqZWN0ID0gbmV3IENTUzJET2JqZWN0KCQoaHRtbClbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY1NTMkRPYmplY3QubmFtZSA9IFwiMmRMYWJlbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY1NTMkRPYmplY3QucG9zaXRpb24ueSA9IDEyMCAvIDIgKyA3MCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QucmVtb3ZlKG9iamVjdC5nZXRPYmplY3RCeU5hbWUoXCIyZExhYmVsXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5hZGQoY1NTMkRPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29kZUxvYWRlclNlcnZpY2UubG9hZENvZGUoNzAsIDcwLCA3MCwgZnVuY3Rpb24gKG1lc2gpIHtcclxuICAgICAgICAgICAgbWVzaC5wb3NpdGlvbi5zZXQoMTAwLCAxMDAsIDApO1xyXG4gICAgICAgICAgICBtZXNoLmNhc3RTaGFkb3cgPSB0cnVlO1xyXG4gICAgICAgICAgICBtZXNoLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5hZGRFdmVudExpc3RlbmVyKG1lc2gsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLnq4vmlrnkvZPlr7nosaHooqvpvKDmoIfngrnlh7tcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2xkTG9va0F0ID0gdGhpZC5zY2VuZVNlcnZpY2UuY29udHJvbHMudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0xvb2tBdCA9IG9iamVjdC5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIGlmICghQ29tbW9uVXRpbC5vYmpJc0VxdWFsKG9sZExvb2tBdCwgbmV3TG9va0F0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLm15QW5pbWF0ZSgyLCBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvb2tBdF94ID0gb2xkTG9va0F0LnggKyAobmV3TG9va0F0LnggLSBvbGRMb29rQXQueCkgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvb2tBdF95ID0gb2xkTG9va0F0LnkgKyAobmV3TG9va0F0LnkgLSBvbGRMb29rQXQueSkgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvb2tBdF96ID0gb2xkTG9va0F0LnogKyAobmV3TG9va0F0LnogLSBvbGRMb29rQXQueikgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZlY3RvcjMgPSBuZXcgVEhSRUUuVmVjdG9yMyhsb29rQXRfeCwgbG9va0F0X3ksIGxvb2tBdF96KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UuY2FtZXJhLmxvb2tBdCh2ZWN0b3IzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UuY29udHJvbHMudGFyZ2V0ID0gdmVjdG9yMztcclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvbGRQb3NpdGlvbiA9IHRoaWQuc2NlbmVTZXJ2aWNlLmNhbWVyYS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gb2JqZWN0LnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5teUFuaW1hdGUoMiwgZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FtZXJhQmFja0Rpc3RfeCA9IDgwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYW1lcmFCYWNrRGlzdF95ID0gMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhbWVyYUJhY2tEaXN0X3ogPSA4MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb25feCA9IG9sZFBvc2l0aW9uLnggKyAobmV3UG9zaXRpb24ueCArIGNhbWVyYUJhY2tEaXN0X3ggLSBvbGRQb3NpdGlvbi54KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uX3kgPSBvbGRQb3NpdGlvbi55ICsgKG5ld1Bvc2l0aW9uLnkgKyBjYW1lcmFCYWNrRGlzdF95IC0gb2xkUG9zaXRpb24ueSkgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbl96ID0gb2xkUG9zaXRpb24ueiArIChuZXdQb3NpdGlvbi56ICsgY2FtZXJhQmFja0Rpc3RfeiAtIG9sZFBvc2l0aW9uLnopICogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5jYW1lcmEucG9zaXRpb24uc2V0KHBvc2l0aW9uX3gsIHBvc2l0aW9uX3ksIHBvc2l0aW9uX3opO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UuY29udHJvbHMudXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yqo55S75pKt5pS+5a6M5q+VXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGh0bWwgPSBcIjxkaXYgY2xhc3M9XFxcImVsZW1lbnRcXFwiPlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9XFxcIm51bWJlclxcXCI+57yW5Y+377yaMDAyPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPGRpdiBjbGFzcz1cXFwic3ltYm9sXFxcIj7nq4vmlrnkvZM8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPVxcXCJkZXRhaWxzXFxcIj7mma7pgJrnmoTnq4vmlrnkvZPvvIwzROeahGxhYmVsPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPC9kaXY+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY1NTM0RPYmplY3QgPSBuZXcgQ1NTM0RPYmplY3QoJChodG1sKVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjU1MzRE9iamVjdC5uYW1lID0gXCIzZExhYmVsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjU1MzRE9iamVjdC5wb3NpdGlvbi55ID0gMTIwIC8gMiArIDcwIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5yZW1vdmUob2JqZWN0LmdldE9iamVjdEJ5TmFtZShcIjNkTGFiZWxcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmFkZChjU1MzRE9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgb2JqTG9hZGVyU2VydmljZSA9IG5ldyBPQkpMb2FkZXJTZXJ2aWNlKHRoaWQuc2NlbmVTZXJ2aWNlKTtcclxuICAgICAgICBvYmpMb2FkZXJTZXJ2aWNlLmxvYWRPYmooXCIvbW9kZWxzL29iai9tYWxlMDIvbWFsZTAyXCIsIGZ1bmN0aW9uIChvYmplY3QpIHtcclxuICAgICAgICAgICAgb2JqZWN0LnBvc2l0aW9uLnNldCgzMDAsIDAsIDApO1xyXG4gICAgICAgICAgICBvYmplY3QuY2FzdFNoYWRvdyA9IHRydWU7XHJcbiAgICAgICAgICAgIG9iamVjdC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UuYWRkRXZlbnRMaXN0ZW5lcihvYmplY3QsIFwiY2xpY2tcIiwgZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLnlLfkurrooqvpvKDmoIfngrnlh7tcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2xkTG9va0F0ID0gdGhpZC5zY2VuZVNlcnZpY2UuY29udHJvbHMudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0xvb2tBdCA9IG9iamVjdC5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIGlmICghQ29tbW9uVXRpbC5vYmpJc0VxdWFsKG9sZExvb2tBdCwgbmV3TG9va0F0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLm15QW5pbWF0ZSgyLCBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvb2tBdF94ID0gb2xkTG9va0F0LnggKyAobmV3TG9va0F0LnggLSBvbGRMb29rQXQueCkgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvb2tBdF95ID0gb2xkTG9va0F0LnkgKyAobmV3TG9va0F0LnkgLSBvbGRMb29rQXQueSkgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxvb2tBdF96ID0gb2xkTG9va0F0LnogKyAobmV3TG9va0F0LnogLSBvbGRMb29rQXQueikgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZlY3RvcjMgPSBuZXcgVEhSRUUuVmVjdG9yMyhsb29rQXRfeCwgbG9va0F0X3ksIGxvb2tBdF96KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UuY2FtZXJhLmxvb2tBdCh2ZWN0b3IzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UuY29udHJvbHMudGFyZ2V0ID0gdmVjdG9yMztcclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvbGRQb3NpdGlvbiA9IHRoaWQuc2NlbmVTZXJ2aWNlLmNhbWVyYS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gb2JqZWN0LnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5teUFuaW1hdGUoMiwgZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FtZXJhQmFja0Rpc3RfeCA9IDgwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYW1lcmFCYWNrRGlzdF95ID0gMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhbWVyYUJhY2tEaXN0X3ogPSA4MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb25feCA9IG9sZFBvc2l0aW9uLnggKyAobmV3UG9zaXRpb24ueCArIGNhbWVyYUJhY2tEaXN0X3ggLSBvbGRQb3NpdGlvbi54KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uX3kgPSBvbGRQb3NpdGlvbi55ICsgKG5ld1Bvc2l0aW9uLnkgKyBjYW1lcmFCYWNrRGlzdF95IC0gb2xkUG9zaXRpb24ueSkgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbl96ID0gb2xkUG9zaXRpb24ueiArIChuZXdQb3NpdGlvbi56ICsgY2FtZXJhQmFja0Rpc3RfeiAtIG9sZFBvc2l0aW9uLnopICogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5jYW1lcmEucG9zaXRpb24uc2V0KHBvc2l0aW9uX3gsIHBvc2l0aW9uX3ksIHBvc2l0aW9uX3opO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UuY29udHJvbHMudXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yqo55S75pKt5pS+5a6M5q+VXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGh0bWwgPSBcIjxkaXYgY2xhc3M9XFxcImVsZW1lbnRcXFwiPlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9XFxcIm51bWJlclxcXCI+57yW5Y+377yaMDAxPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPGRpdiBjbGFzcz1cXFwic3ltYm9sXFxcIj7nlLfkuro8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPVxcXCJkZXRhaWxzXFxcIj7nq5nnq4vnmoTnlLfkurrvvIwzROeahGxhYmVsPC9kaXY+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPC9kaXY+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY1NTM0RPYmplY3QgPSBuZXcgQ1NTM0RPYmplY3QoJChodG1sKVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjU1MzRE9iamVjdC5uYW1lID0gXCIzZExhYmVsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjU1MzRE9iamVjdC5wb3NpdGlvbi55ID0gMTIwIC8gMiArIDcwIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC5yZW1vdmUob2JqZWN0LmdldE9iamVjdEJ5TmFtZShcIjNkTGFiZWxcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmFkZChjU1MzRE9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgZmJ4TG9hZGVyU2VydmljZSA9IG5ldyBGQlhMb2FkZXJTZXJ2aWNlKHRoaWQuc2NlbmVTZXJ2aWNlKTtcclxuICAgICAgICBmYnhMb2FkZXJTZXJ2aWNlLmxvYWRGYngoXCIvbW9kZWxzL2ZieC9zYW1iYV9kYW5jaW5nL1NhbWJhIERhbmNpbmdcIiwgZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgICAgICBvYmplY3QucG9zaXRpb24uc2V0KC0zMDAsIDAsIDApO1xyXG4gICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5zY2VuZS5hZGQobmV3IFRIUkVFLlNrZWxldG9uSGVscGVyKG9iamVjdCkpO1xyXG4gICAgICAgICAgICBvYmplY3QudHJhdmVyc2UoZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5jYXN0U2hhZG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGV0IGNsb2NrID0gbmV3IFRIUkVFLkNsb2NrKCk7XHJcbiAgICAgICAgICAgIGxldCBtaXhlciA9IG5ldyBUSFJFRS5BbmltYXRpb25NaXhlcihvYmplY3QpO1xyXG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gbWl4ZXIuY2xpcEFjdGlvbihvYmplY3QuYW5pbWF0aW9uc1swXSk7XHJcbiAgICAgICAgICAgIGFjdGlvbi5wbGF5KCk7XHJcbiAgICAgICAgICAgIGFuaW1hdGUoKTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcclxuICAgICAgICAgICAgICAgIG1peGVyLnVwZGF0ZShjbG9jay5nZXREZWx0YSgpKTtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5hZGRFdmVudExpc3RlbmVyKG9iamVjdCwgXCJjbGlja1wiLCBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWls+S6uuiiq+m8oOagh+eCueWHu1wiKTtcclxuICAgICAgICAgICAgICAgIGxldCBvbGRMb29rQXQgPSB0aGlkLnNjZW5lU2VydmljZS5jb250cm9scy50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3TG9va0F0ID0gb2JqZWN0LnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFDb21tb25VdGlsLm9iaklzRXF1YWwob2xkTG9va0F0LCBuZXdMb29rQXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2UubXlBbmltYXRlKDIsIGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9va0F0X3ggPSBvbGRMb29rQXQueCArIChuZXdMb29rQXQueCAtIG9sZExvb2tBdC54KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9va0F0X3kgPSBvbGRMb29rQXQueSArIChuZXdMb29rQXQueSAtIG9sZExvb2tBdC55KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbG9va0F0X3ogPSBvbGRMb29rQXQueiArIChuZXdMb29rQXQueiAtIG9sZExvb2tBdC56KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmVjdG9yMyA9IG5ldyBUSFJFRS5WZWN0b3IzKGxvb2tBdF94LCBsb29rQXRfeSwgbG9va0F0X3opO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5jYW1lcmEubG9va0F0KHZlY3RvcjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5jb250cm9scy50YXJnZXQgPSB2ZWN0b3IzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9sZFBvc2l0aW9uID0gdGhpZC5zY2VuZVNlcnZpY2UuY2FtZXJhLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSBvYmplY3QucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLm15QW5pbWF0ZSgyLCBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYW1lcmFCYWNrRGlzdF94ID0gODAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhbWVyYUJhY2tEaXN0X3kgPSAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FtZXJhQmFja0Rpc3RfeiA9IDgwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbl94ID0gb2xkUG9zaXRpb24ueCArIChuZXdQb3NpdGlvbi54ICsgY2FtZXJhQmFja0Rpc3RfeCAtIG9sZFBvc2l0aW9uLngpICogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb25feSA9IG9sZFBvc2l0aW9uLnkgKyAobmV3UG9zaXRpb24ueSArIGNhbWVyYUJhY2tEaXN0X3kgLSBvbGRQb3NpdGlvbi55KSAqIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uX3ogPSBvbGRQb3NpdGlvbi56ICsgKG5ld1Bvc2l0aW9uLnogKyBjYW1lcmFCYWNrRGlzdF96IC0gb2xkUG9zaXRpb24ueikgKiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLmNhbWVyYS5wb3NpdGlvbi5zZXQocG9zaXRpb25feCwgcG9zaXRpb25feSwgcG9zaXRpb25feik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlkLnNjZW5lU2VydmljZS5jb250cm9scy51cGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLliqjnlLvmkq3mlL7lrozmr5VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaHRtbCA9IFwiPGRpdiBjbGFzcz1cXFwiZWxlbWVudFxcXCI+XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPGRpdiBjbGFzcz1cXFwibnVtYmVyXFxcIj7nvJblj7fvvJowMDE8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPVxcXCJzeW1ib2xcXFwiPuWls+S6ujwvZGl2PlwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9XFxcImRldGFpbHNcXFwiPui3s+iInueahOWls+S6uu+8jDNE55qEbGFiZWw8L2Rpdj5cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8L2Rpdj5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjU1MzRE9iamVjdCA9IG5ldyBDU1MzRE9iamVjdCgkKGh0bWwpWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNTUzNET2JqZWN0Lm5hbWUgPSBcIjNkTGFiZWxcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNTUzNET2JqZWN0LnBvc2l0aW9uLnkgPSAxMjAgLyAyICsgNzAgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnJlbW92ZShvYmplY3QuZ2V0T2JqZWN0QnlOYW1lKFwiM2RMYWJlbFwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QuYWRkKGNTUzNET2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzXCI7XHJcbmltcG9ydCB7IENTUzJEUmVuZGVyZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3JlbmRlcmVycy9DU1MyRFJlbmRlcmVyXCI7XHJcbmltcG9ydCB7IENTUzNEUmVuZGVyZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3JlbmRlcmVycy9DU1MzRFJlbmRlcmVyXCI7XHJcbmV4cG9ydCBjbGFzcyBTY2VuZVNlcnZpY2Uge1xyXG4gICAgaW5pdFNjZW5lKCkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuICAgICAgICB0aGlzLnBlcnNwZWN0aXZlQ2FtZXJhKCk7XHJcbiAgICAgICAgdGhpcy53ZWJHTFJlbmRlcmVyKCk7XHJcbiAgICAgICAgdGhpcy5jU1MyRFJlbmRlcmVyRnVuKCk7XHJcbiAgICAgICAgdGhpcy5jU1MzRFJlbmRlcmVyRnVuKCk7XHJcbiAgICAgICAgdGhpcy5vcmJpdENvbnRyb2xzKCk7XHJcbiAgICAgICAgdGhpcy5saWdodCgpO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgICBiYWNrZ3JvdW5kKCkge1xyXG4gICAgfVxyXG4gICAgb3JiaXRDb250cm9scygpIHtcclxuICAgICAgICBsZXQgdGhpZCA9IHRoaXM7XHJcbiAgICAgICAgdGhpZC5jb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKHRoaWQuY2FtZXJhLCB0aGlkLmNTUzNEUmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpZC5jYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaWQuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuICAgICAgICAgICAgdGhpZC5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgICAgICAgICB0aGlkLmNTUzJEUmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgICAgICAgdGhpZC5jU1MzRFJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgICAgfSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaWQuY29udHJvbHMudGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICB9XHJcbiAgICB3ZWJHTFJlbmRlcmVyKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IGFudGlhbGlhczogdHJ1ZSwgbG9nYXJpdGhtaWNEZXB0aEJ1ZmZlcjogdHJ1ZSB9KTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgY1NTMkRSZW5kZXJlckZ1bigpIHtcclxuICAgICAgICB0aGlzLmNTUzJEUmVuZGVyZXIgPSBuZXcgQ1NTMkRSZW5kZXJlcigpO1xyXG4gICAgICAgIHRoaXMuY1NTMkRSZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY1NTMkRSZW5kZXJlci5kb21FbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICB0aGlzLmNTUzJEUmVuZGVyZXIuZG9tRWxlbWVudC5zdHlsZS50b3AgPSBcIjBcIjtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY1NTMkRSZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgIH1cclxuICAgIGNTUzNEUmVuZGVyZXJGdW4oKSB7XHJcbiAgICAgICAgdGhpcy5jU1MzRFJlbmRlcmVyID0gbmV3IENTUzNEUmVuZGVyZXIoKTtcclxuICAgICAgICB0aGlzLmNTUzNEUmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmNTUzNEUmVuZGVyZXIuZG9tRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgdGhpcy5jU1MzRFJlbmRlcmVyLmRvbUVsZW1lbnQuc3R5bGUudG9wID0gXCIwXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNTUzNEUmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBwZXJzcGVjdGl2ZUNhbWVyYSgpIHtcclxuICAgICAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSgzMCwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDEsIDEwMDAwKTtcclxuICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApKTtcclxuICAgIH1cclxuICAgIGxpZ2h0KCkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhkZmViZmYsIDAuMykpO1xyXG4gICAgICAgIGxldCBkaXJlY3Rpb25hbExpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYpO1xyXG4gICAgICAgIGRpcmVjdGlvbmFsTGlnaHQucG9zaXRpb24uc2V0KDAsIDUwMDAsIDUwMDApO1xyXG4gICAgICAgIGRpcmVjdGlvbmFsTGlnaHQuY2FzdFNoYWRvdyA9IHRydWU7XHJcbiAgICAgICAgZGlyZWN0aW9uYWxMaWdodC5uYW1lID0gXCJiYXNpc0RpcmVjdGlvbmFsTGlnaHRcIjtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZChkaXJlY3Rpb25hbExpZ2h0KTtcclxuICAgICAgICB0aGlzLnNjZW5lLmFkZChuZXcgVEhSRUUuQ2FtZXJhSGVscGVyKGRpcmVjdGlvbmFsTGlnaHQuc2hhZG93LmNhbWVyYSkpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcclxuICAgICAgICB0aGlzLmNTUzJEUmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcclxuICAgICAgICB0aGlzLmNTUzNEUmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xzLnVwZGF0ZSgpO1xyXG4gICAgICAgIGxldCB0aGlkID0gdGhpcztcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlkLnJlbmRlcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcihsaXN0ZW5lck9iaiwgZXZlbiwgY2FsbGJhY2spIHtcclxuICAgICAgICBsZXQgdGhpZCA9IHRoaXM7XHJcbiAgICAgICAgbGlzdGVuZXJPYmpbZXZlbl0gPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgbGV0IHJheWNhc3RlciA9IG5ldyBUSFJFRS5SYXljYXN0ZXIoKTtcclxuICAgICAgICAgICAgbGV0IG1vdXNlID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuICAgICAgICAgICAgbW91c2UueCA9IChldmVudFtcImNsaWVudFhcIl0gLyB0aGlkLmNTUzNEUmVuZGVyZXIuZG9tRWxlbWVudC5jbGllbnRXaWR0aCkgKiAyIC0gMTtcclxuICAgICAgICAgICAgbW91c2UueSA9IC0oZXZlbnRbXCJjbGllbnRZXCJdIC8gdGhpZC5jU1MzRFJlbmRlcmVyLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0KSAqIDIgKyAxO1xyXG4gICAgICAgICAgICByYXljYXN0ZXIuc2V0RnJvbUNhbWVyYShtb3VzZSwgdGhpZC5jYW1lcmEpO1xyXG4gICAgICAgICAgICBsZXQgaW50ZXJzZWN0cztcclxuICAgICAgICAgICAgaWYgKGxpc3RlbmVyT2JqLnR5cGUgPT0gXCJNZXNoXCIpIHtcclxuICAgICAgICAgICAgICAgIGludGVyc2VjdHMgPSByYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0cyhbbGlzdGVuZXJPYmpdLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpbnRlcnNlY3RzID0gcmF5Y2FzdGVyLmludGVyc2VjdE9iamVjdHMobGlzdGVuZXJPYmouY2hpbGRyZW4sIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbnRlcnNlY3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaylcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhsaXN0ZW5lck9iaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY1NTM0RSZW5kZXJlci5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbiwgbGlzdGVuZXJPYmpbZXZlbl0sIGZhbHNlKTtcclxuICAgIH1cclxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIobGlzdGVuZXJPYmosIGV2ZW4pIHtcclxuICAgICAgICB0aGlzLmNTUzNEUmVuZGVyZXIuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW4sIGxpc3RlbmVyT2JqW2V2ZW5dKTtcclxuICAgIH1cclxuICAgIG15QW5pbWF0ZShsZXZlbCwgb25VcGRhdGUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gMDtcclxuICAgICAgICBsZXQgX3ZhbHVlID0gMC4wMSAqIGxldmVsO1xyXG4gICAgICAgIGFuaW1hdGUodmFsdWUpO1xyXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGUodmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKG9uVXBkYXRlKVxyXG4gICAgICAgICAgICAgICAgb25VcGRhdGUodmFsdWUpO1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgKz0gX3ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBOdW1iZXIodmFsdWUudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFuaW1hdGUodmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYW1lcmFJbnNwZWN0KHZhbHVlLCBwb3NpdGlvbiwgY2FsbGJhY2spIHtcclxuICAgICAgICBsZXQgdGhpZCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGZsYWcgPSB2YWx1ZSA+PSAwO1xyXG4gICAgICAgIGNhbWVyYUluc3BlY3RBbmltYXRlKCk7XHJcbiAgICAgICAgZnVuY3Rpb24gY2FtZXJhSW5zcGVjdEFuaW1hdGUoKSB7XHJcbiAgICAgICAgICAgIGlmIChmbGFnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpZC5jYW1lcmEucG9zaXRpb24ueCA8IHBvc2l0aW9uW1wieFwiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaWQuY2FtZXJhLnBvc2l0aW9uLnggKz0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpZC5jYW1lcmEucG9zaXRpb24ueSA8IHBvc2l0aW9uW1wieVwiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaWQuY2FtZXJhLnBvc2l0aW9uLnkgKz0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpZC5jYW1lcmEucG9zaXRpb24ueiA8IHBvc2l0aW9uW1wielwiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaWQuY2FtZXJhLnBvc2l0aW9uLnogKz0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpZC5jYW1lcmEucG9zaXRpb24ueCA+IHBvc2l0aW9uW1wieFwiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaWQuY2FtZXJhLnBvc2l0aW9uLnggKz0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpZC5jYW1lcmEucG9zaXRpb24ueSA+IHBvc2l0aW9uW1wieVwiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaWQuY2FtZXJhLnBvc2l0aW9uLnkgKz0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpZC5jYW1lcmEucG9zaXRpb24ueiA+IHBvc2l0aW9uW1wielwiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaWQuY2FtZXJhLnBvc2l0aW9uLnogKz0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmbGFnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaWQuY2FtZXJhLnBvc2l0aW9uLnggPj0gcG9zaXRpb25bXCJ4XCJdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaWQuY2FtZXJhLnBvc2l0aW9uLnkgPj0gcG9zaXRpb25bXCJ5XCJdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaWQuY2FtZXJhLnBvc2l0aW9uLnogPj0gcG9zaXRpb25bXCJ6XCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpZC5jYW1lcmEucG9zaXRpb24ueCA8PSBwb3NpdGlvbltcInhcIl0gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpZC5jYW1lcmEucG9zaXRpb24ueSA8PSBwb3NpdGlvbltcInlcIl0gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpZC5jYW1lcmEucG9zaXRpb24ueiA8PSBwb3NpdGlvbltcInpcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhbWVyYUluc3BlY3RBbmltYXRlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcbmV4cG9ydCBjbGFzcyBDb2RlTG9hZGVyU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnNjZW5lU2VydmljZSA9IHNjZW5lU2VydmljZTtcclxuICAgIH1cclxuICAgIGxvYWRDb2RlKHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBvbkxvYWQpIHtcclxuICAgICAgICBsZXQgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkod2lkdGgsIGhlaWdodCwgZGVwdGgpO1xyXG4gICAgICAgIGdlb21ldHJ5W3dpZHRoXSA9IHdpZHRoO1xyXG4gICAgICAgIGdlb21ldHJ5W2hlaWdodF0gPSBoZWlnaHQ7XHJcbiAgICAgICAgZ2VvbWV0cnlbZGVwdGhdID0gZGVwdGg7XHJcbiAgICAgICAgbGV0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKCk7XHJcbiAgICAgICAgbGV0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG4gICAgICAgIGlmIChvbkxvYWQpXHJcbiAgICAgICAgICAgIG9uTG9hZChtZXNoKTtcclxuICAgICAgICB0aGlzLnNjZW5lU2VydmljZS5zY2VuZS5hZGQobWVzaCk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRlKG1lc2gpO1xyXG4gICAgfVxyXG4gICAgYW5pbWF0ZShtZXNoKSB7XHJcbiAgICAgICAgbWVzaC5yb3RhdGlvbi55ICs9IDAuMDI7XHJcbiAgICAgICAgbGV0IHRoaWQgPSB0aGlzO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaWQuYW5pbWF0ZShtZXNoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcbmltcG9ydCB7IEZCWExvYWRlciB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9GQlhMb2FkZXJcIjtcclxuaW1wb3J0IHsgVEdBTG9hZGVyIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL1RHQUxvYWRlclwiO1xyXG5pbXBvcnQgeyBERFNMb2FkZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvRERTTG9hZGVyXCI7XHJcbmV4cG9ydCBjbGFzcyBGQlhMb2FkZXJTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlID0gc2NlbmVTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgbG9hZEZieCh1cmwsIG9uTG9hZCkge1xyXG4gICAgICAgIGxldCB0aGlkID0gdGhpcztcclxuICAgICAgICBUSFJFRS5Mb2FkZXIuSGFuZGxlcnMuYWRkKC9cXC50Z2EkL2ksIG5ldyBUR0FMb2FkZXIoKSk7XHJcbiAgICAgICAgVEhSRUUuTG9hZGVyLkhhbmRsZXJzLmFkZCgvXFwuZGRzJC9pLCBuZXcgRERTTG9hZGVyKCkpO1xyXG4gICAgICAgIG5ldyBGQlhMb2FkZXIoKS5sb2FkKHVybCArIFwiLmZieFwiLCBmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChvbkxvYWQpXHJcbiAgICAgICAgICAgICAgICBvbkxvYWQob2JqZWN0KTtcclxuICAgICAgICAgICAgdGhpZC5zY2VuZVNlcnZpY2Uuc2NlbmUuYWRkKG9iamVjdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5pbXBvcnQgeyBNVExMb2FkZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvTVRMTG9hZGVyXCI7XHJcbmltcG9ydCB7IE9CSkxvYWRlciB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9PQkpMb2FkZXJcIjtcclxuaW1wb3J0IHsgVEdBTG9hZGVyIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL1RHQUxvYWRlclwiO1xyXG5pbXBvcnQgeyBERFNMb2FkZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvRERTTG9hZGVyXCI7XHJcbmV4cG9ydCBjbGFzcyBPQkpMb2FkZXJTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuc2NlbmVTZXJ2aWNlID0gc2NlbmVTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgbG9hZE9iaih1cmwsIG9uTG9hZCkge1xyXG4gICAgICAgIGxldCB0aGlkID0gdGhpcztcclxuICAgICAgICBUSFJFRS5Mb2FkZXIuSGFuZGxlcnMuYWRkKC9cXC50Z2EkL2ksIG5ldyBUR0FMb2FkZXIoKSk7XHJcbiAgICAgICAgVEhSRUUuTG9hZGVyLkhhbmRsZXJzLmFkZCgvXFwuZGRzJC9pLCBuZXcgRERTTG9hZGVyKCkpO1xyXG4gICAgICAgIG5ldyBNVExMb2FkZXIoKS5sb2FkKHVybCArICcubXRsJywgZnVuY3Rpb24gKG1hdGVyaWFscykge1xyXG4gICAgICAgICAgICBtYXRlcmlhbHMucHJlbG9hZCgpO1xyXG4gICAgICAgICAgICBsZXQgb2JqTG9hZGVyID0gbmV3IE9CSkxvYWRlcigpO1xyXG4gICAgICAgICAgICBvYmpMb2FkZXIuc2V0TWF0ZXJpYWxzKG1hdGVyaWFscyk7XHJcbiAgICAgICAgICAgIG9iakxvYWRlci5sb2FkKHVybCArICcub2JqJywgZnVuY3Rpb24gKG9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9uTG9hZClcclxuICAgICAgICAgICAgICAgICAgICBvbkxvYWQob2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIHRoaWQuc2NlbmVTZXJ2aWNlLnNjZW5lLmFkZChvYmplY3QpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgQ29tbW9uVXRpbCB7XHJcbiAgICBzdGF0aWMgb2JqSXNFcXVhbChvYmoxLCBvYmoyKSB7XHJcbiAgICAgICAgbGV0IG8xID0gb2JqMSBpbnN0YW5jZW9mIE9iamVjdDtcclxuICAgICAgICBsZXQgbzIgPSBvYmoyIGluc3RhbmNlb2YgT2JqZWN0O1xyXG4gICAgICAgIGlmICghbzEgfHwgIW8yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmoxID09PSBvYmoyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMob2JqMSkubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhvYmoyKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBhdHRyIGluIG9iajEpIHtcclxuICAgICAgICAgICAgbGV0IHQxID0gb2JqMVthdHRyXSBpbnN0YW5jZW9mIE9iamVjdDtcclxuICAgICAgICAgICAgbGV0IHQyID0gb2JqMlthdHRyXSBpbnN0YW5jZW9mIE9iamVjdDtcclxuICAgICAgICAgICAgaWYgKHQxICYmIHQyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vYmpJc0VxdWFsKG9iajFbYXR0cl0sIG9iajJbYXR0cl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG9iajFbYXR0cl0gIT09IG9iajJbYXR0cl0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9