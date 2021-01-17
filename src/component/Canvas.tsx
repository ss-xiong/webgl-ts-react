import React, {
  useRef, useEffect,
} from 'react';

export type iProps = {
  set: (gl: WebGL2RenderingContext, canvasDOM: HTMLCanvasElement) => void, // 更新元素
  width?: number; // Canvas 宽
  height?: number; // Canvas 高
}

// Canvas组件
export const Canvas: React.FC<iProps> = (props) => {
  // 创建引用
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { set, width, height, ...canvsProps } = props;
  // 更新
  useEffect(() => {
    const canvasDOM = canvasRef.current;
    if (canvasDOM) {
      const glContext = canvasDOM.getContext('webgl2');
      if (glContext) {
        set(glContext, canvasDOM);
      }
    }
  }, [canvasRef, set])

  return (
    <canvas ref={canvasRef} width={width || 500} height={height || 500} {...canvsProps}>
      Your browser do not support canvas. please upgread!
    </canvas>
  )
}