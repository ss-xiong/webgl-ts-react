import React, {
  useEffect, useState, useCallback,
} from 'react'
import { Canvas } from '@component/Canvas'
import { initShaders, getCurrentProgram } from '@utils/initShaders';


export const HelloPoint2: React.FC = () => {
  const [gl, setGl] = useState<WebGL2RenderingContext>();
  // 更新 gl
  const updateGl = useCallback((gl: WebGL2RenderingContext, canvasDom: HTMLCanvasElement) => {
    setGl(gl);
  }, [setGl])

  useEffect(() => {
    if (gl) {
      gl.clearColor(0.0, 0.0, 0.0, 1.0)
      gl.clear(gl.COLOR_BUFFER_BIT) // 清空颜色缓冲区
      // 顶点着色器
      const VSHADER_SOURCE = `
        attribute vec4 a_Position;
        void main() {
          gl_Position = a_Position; // 设置坐标
          gl_PointSize = 10.0; // 设置尺寸
        }
      `
      // 片元着色器
      const FSHADER_SOURCE = `
        void main() {
          gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // 设置颜色
        }
      `

      initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)
      const program = getCurrentProgram()
      if (!program) {
        return;
      }
      const a_Position = gl.getAttribLocation(program, 'a_Position')
      gl.vertexAttrib3f(a_Position, 0, 0, 0)
      // 绘制一个点
      gl.drawArrays(gl.POINTS, 0, 1)
    }
  }, [gl])
  return (
    <Canvas set={updateGl}></Canvas> 
  )
};
