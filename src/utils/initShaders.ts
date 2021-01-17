// 当前使用的Program
let currentProgram: WebGLProgram | null = null;

// 获取当前的Program
export const getCurrentProgram = () => {
  return currentProgram;
}

// 初始化着色器
export const initShaders = (
  gl: WebGL2RenderingContext,
  vertexShaderSource: string,
  fragmentShaderSource: string,
) => {
  const vertexShader = gl.createShader(gl.VERTEX_SHADER)
  if (vertexShader !== null) {
    gl.shaderSource(vertexShader, vertexShaderSource)
    gl.compileShader(vertexShader)
  }
  
  const fregmentShader = gl.createShader(gl.FRAGMENT_SHADER)
  if (fregmentShader) {
    gl.shaderSource(fregmentShader, fragmentShaderSource)
    gl.compileShader(fregmentShader)
  }
  

  const shaderProgram = gl.createProgram()
  if (shaderProgram) {
    if (vertexShader) { gl.attachShader(shaderProgram, vertexShader); }
    if (fregmentShader) { gl.attachShader(shaderProgram, fregmentShader); }

    gl.linkProgram(shaderProgram)
    gl.useProgram(shaderProgram)
    
    currentProgram = shaderProgram;
  }
}
