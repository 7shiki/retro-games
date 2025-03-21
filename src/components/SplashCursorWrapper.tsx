'use client';

import { useEffect, useState } from 'react';
import SplashCursor from './SplashCursor';

export default function SplashCursorWrapper() {
  // 防止水合错误的关键：确保只在客户端渲染
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 标记组件已挂载，确保只在客户端渲染后显示
    setMounted(true);
  }, []);

  // 关键：只在客户端挂载后渲染SplashCursor组件
  if (!mounted) {
    return null;
  }

  // 使用原有的SplashCursor组件
  return <SplashCursor />;
} 