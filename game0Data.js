var level0 = 
{ 
"COMMENT": "A CUBE, SPHERE, AND DIRECTIONAL LIGHTS",
"type": "node",
"name": "rootNode",

"userData":
{
	"scripts": ["sceneControl"]
},

"children":
[
	{
		"COMMENT": "Player",
		"type": "mesh",
		"name": "Player",
		"geometry": "sphere",
		"scale": [1,1,1],
		"translate": [0,0,0],
		"material":
			{
            "type": "meshLambertMaterial",
            "name": "cubeMat",
            "diffuseColor": [0, 1, .05]
        	}
	},
	{
		"COMMENT": "CAMERA LOOKING AT ORIGIN FROM ALONG THE Z AXIS",
		"type": "perspectiveCamera",
		"name": "camera1",
		"eye": [0, 20, 15],
		"center": [0, 0, 0],
		"vup": [0, 1, 0],
		"fov": 30
	},
	{
		"COMMENT": "DIRECTIONAL LIGHT",
		"type": "directionalLight",
		"name": "light1",
		"color": [1, 1, .5],
		"position": [0.5, 1, 0.5]
	},
	{
		"COMMENT": "DIRECTIONAL LIGHT",
		"type": "directionalLight",
		"name": "light2",
		"color": [0.3, 0.3, 1],
		"position": [-0.5, -1, 0.5]
	},
	{
		"COMMENT": "DIRECTIONAL LIGHT",
		"type": "directionalLight",
		"name": "light2",
		"color": [0.3, 0.3, 1],
		"position": [-0.3, -1, 0.3]
	}
]
};

