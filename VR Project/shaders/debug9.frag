#version 450
#extension GL_ARB_separate_shader_objects : enable

layout(binding = 0) uniform sampler2D basicColorMap;
layout(binding = 1) uniform sampler2D specColorMap;
layout(binding = 2) uniform sampler2D normalColorMap;
layout(binding = 3) uniform sampler2D emissiveMap;

layout(set = 0, binding = 5) uniform UniformBufferObject
{
   mat4 modelMat;
   mat4 viewMat;
   mat4 projMat;  
   mat4 viewProjMat;
   mat4 InvViewProjMat;
   mat4 modelViewProjMat;
   mat4 InvTransposeMat;

   vec3 cameraWorldPos;

} ubo;

layout(location = 0) in vec2 fragUV;
layout(location = 1) in vec3 fragWorldPos;

layout(location = 0) out vec4 outColor;


void main()
{  
    outColor = vec4(ubo.cameraWorldPos, 0.0);
}