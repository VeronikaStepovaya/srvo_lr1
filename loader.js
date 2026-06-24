export const loadGLTF = (path) => {
    return new Promise((resolve, reject) => {
        const THREE = window.MINDAR.IMAGE.THREE;
        const loader = new THREE.GLTFLoader();
        loader.load(path, (gltf) => {
            resolve(gltf);
        }, undefined, reject);
    });
};

export const loadTexture = (path) => {
    return new Promise((resolve, reject) => {
        const THREE = window.MINDAR.IMAGE.THREE;
        const loader = new THREE.TextureLoader();
        loader.load(path, (texture) => {
            resolve(texture);
        }, undefined, reject);
    });
};

export const loadVideo = (path) => {
    return new Promise((resolve, reject) => {
        const video = document.createElement("video");
        video.setAttribute("playsinline", "");
        video.addEventListener("loadeddata", () => {
            resolve(video);
        });
        video.src = path;
    });
};

export const loadAudio = (path) => {
    return new Promise((resolve, reject) => {
        const THREE = window.MINDAR.IMAGE.THREE;
        const loader = new THREE.AudioLoader();
        loader.load(path, (buffer) => {
            resolve(buffer);
        }, undefined, reject);
    });
};