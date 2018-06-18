// import Game from './game'

export default class AssetsLoader {
    constructor(scene : HTMLElement) {
        let assetsArray : any= {
            "tower-top-obj": "js/models/towerDefense_001.obj", 
            "tower-top-mtl": "js/models/towerDefense_001.mtl",
            "crystals-1-obj": "js/models/tiles/filled/crystals/towerDefense_076.obj", 
            "crystals-1-mtl": "js/models/tiles/filled/crystals/towerDefense_076.mtl",
            "crystals-2-obj": "js/models/tiles/filled/crystals/towerDefense_077.obj", 
            "crystals-2-mtl": "js/models/tiles/filled/crystals/towerDefense_077.mtl",
            "crystals-3-obj": "js/models/tiles/filled/crystals/towerDefense_118.obj", 
            "crystals-3-mtl": "js/models/tiles/filled/crystals/towerDefense_118.mtl",
            "crystals-4-obj": "js/models/tiles/filled/crystals/towerDefense_119.obj", 
            "crystals-4-mtl": "js/models/tiles/filled/crystals/towerDefense_119.mtl",
            "rocks-1-obj": "js/models/tiles/filled/rocks/towerDefense_006.obj", 
            "rocks-1-mtl": "js/models/tiles/filled/rocks/towerDefense_006.mtl",
            "rocks-2-obj": "js/models/tiles/filled/rocks/towerDefense_007.obj", 
            "rocks-2-mtl": "js/models/tiles/filled/rocks/towerDefense_007.mtl",
            "rocks-3-obj": "js/models/tiles/filled/rocks/towerDefense_068.obj", 
            "rocks-3-mtl": "js/models/tiles/filled/rocks/towerDefense_068.mtl",
            "rocks-4-obj": "js/models/tiles/filled/rocks/towerDefense_073.obj", 
            "rocks-4-mtl": "js/models/tiles/filled/rocks/towerDefense_073.mtl",
            "trees-1-obj": "js/models/tiles/filled/trees/towerDefense_060.obj", 
            "trees-1-mtl": "js/models/tiles/filled/trees/towerDefense_060.mtl",
            "trees-2-obj": "js/models/tiles/filled/trees/towerDefense_063.obj", 
            "trees-2-mtl": "js/models/tiles/filled/trees/towerDefense_063.mtl",
            "trees-3-obj": "js/models/tiles/filled/trees/towerDefense_004.obj", 
            "trees-3-mtl": "js/models/tiles/filled/trees/towerDefense_004.mtl",
            "trees-4-obj": "js/models/tiles/filled/trees/towerDefense_057.obj", 
            "trees-4-mtl": "js/models/tiles/filled/trees/towerDefense_057.mtl",
            "empty-1-obj": "js/models/tiles/towerDefense_088.obj", 
            "empty-1-mtl": "js/models/tiles/towerDefense_088.mtl",
            "path-ns-obj": "js/models/path/towerDefense_089.obj", 
            "path-ns-mtl": "js/models/path/towerDefense_089.mtl",
            "path-we-obj": "js/models/path/towerDefense_090.obj", 
            "path-we-mtl": "js/models/path/towerDefense_090.mtl",
            "path-es-obj": "js/models/path/towerDefense_091.obj", 
            "path-es-mtl": "js/models/path/towerDefense_091.mtl",
            "path-ne-obj": "js/models/path/towerDefense_092.obj", 
            "path-ne-mtl": "js/models/path/towerDefense_092.mtl",
            "path-ws-obj": "js/models/path/towerDefense_093.obj", 
            "path-ws-mtl": "js/models/path/towerDefense_093.mtl",
            "path-nw-obj": "js/models/path/towerDefense_094.obj", 
            "path-nw-mtl": "js/models/path/towerDefense_094.mtl",
            "tower-base-1-obj": "js/models/towers/base/towerDefense_010.obj",
            "tower-base-1-mtl": "js/models/towers/base/towerDefense_010.mtl",
            "tower-body-1-obj": "js/models/towers/body/towerDefense_009.obj",
            "tower-body-1-mtl": "js/models/towers/body/towerDefense_009.mtl",
            "tower-top-1-obj": "js/models/towers/top/towerDefense_001.obj",
            "tower-top-1-mtl": "js/models/towers/top/towerDefense_001.mtl",
            "tower-top-2-obj": "js/models/towers/top/towerDefense_002.obj",
            "tower-top-2-mtl": "js/models/towers/top/towerDefense_002.mtl",
            "tower-top-3-obj": "js/models/towers/top/towerDefense_023.obj",
            "tower-top-3-mtl": "js/models/towers/top/towerDefense_023.mtl",
            "tower-top-4-obj": "js/models/towers/top/towerDefense_027.obj",
            "tower-top-4-mtl": "js/models/towers/top/towerDefense_027.mtl",
            "tower-top-5-obj": "js/models/towers/top/towerDefense_029.obj",
            "tower-top-5-mtl": "js/models/towers/top/towerDefense_029.mtl",
            "tower-top-6-obj": "js/models/towers/top/towerDefense_053.obj",
            "tower-top-6-mtl": "js/models/towers/top/towerDefense_053.mtl"
        }

        let assets = document.createElement("a-assets")
        for(var key in assetsArray) {
            let asset = document.createElement("a-asset-item")
            asset.setAttribute("id", key)
            asset.setAttribute("src", assetsArray[key])
            assets.appendChild(asset)
        }
        // console.log(Game.getInstance())
        // Game.getInstance().scene.appendChild(assets)
        scene.appendChild(assets)
    }
}