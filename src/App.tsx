import React, { useState, useEffect, useRef, useMemo } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import styles from "./App.module.less";

// 组件引入
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Section5 from "./components/section5";
import Section6 from "./components/section6";
import Section7 from "./components/section7";

// 常量定义

// 类型定义
interface ComponentConfig {
  Component: React.FC<{ className?: string }>;
  key: string;
}

const App: React.FC = () => {
  // 状态管理
  const [activeTab, setActiveTab] = useState<string>("1");
  const [isManualScrolling, setIsManualScrolling] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [time, setTime] = useState<string>(new Date().toLocaleString());

  // Ref管理
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const topContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const targetScrollRef = useRef<number | null>(null);

  // 组件配置
  const components: ComponentConfig[] = useMemo(
    () => [
      { Component: Section1, key: "1" },
      { Component: Section2, key: "2" },
      { Component: Section3, key: "3" },
      { Component: Section4, key: "4" },
      { Component: Section5, key: "5" },
      { Component: Section6, key: "6" },
      { Component: Section7, key: "7" },
    ],
    []
  );

  const tabItems: TabsProps["items"] = components.map((_, index) => ({
    key: `${index + 1}`,
    label: `Tab ${index + 1}`,
  }));

  // 重置手动滚动标志
  const resetManualScrollFlag = () => {
    setIsManualScrolling(false);
  };

  // 滚动事件处理函数
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    setIsSticky(container.scrollTop > 0);
    if (isManualScrolling && targetScrollRef.current !== null) {
      const diff = Math.abs(container.scrollTop - targetScrollRef.current);
      if (diff <= 2) {
        targetScrollRef.current = null;
        resetManualScrollFlag();
      }
    }
    if (!isManualScrolling) {
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      let currentSectionIndex = 0;
      let maxVisibleHeight = 0;
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          const elementTop = rect.top - containerRect.top + scrollTop;
          const elementBottom = elementTop + rect.height;
          let visibleHeight = 0;
          if (
            elementBottom > scrollTop &&
            elementTop < scrollTop + containerHeight
          ) {
            const visibleTop = Math.max(scrollTop, elementTop);
            const visibleBottom = Math.min(
              scrollTop + containerHeight,
              elementBottom
            );
            visibleHeight = visibleBottom - visibleTop;
          }
          if (visibleHeight > maxVisibleHeight) {
            maxVisibleHeight = visibleHeight;
            currentSectionIndex = index;
          }
        }
      });
      const newActiveTab = `${currentSectionIndex + 1}`;
      if (newActiveTab !== activeTab) {
        setActiveTab(newActiveTab);
      }
    }
  };

  // 点击tab滚动到对应区域
  const handleTabChange = (key: string) => {
    setIsManualScrolling(true);
    setActiveTab(key);

    const index = parseInt(key) - 1;
    const ref = sectionRefs.current[index];
    const topContainerHeight = topContainerRef.current?.offsetHeight || 0;
    const scrollContainer = scrollContainerRef.current;

    if (ref && scrollContainer) {
      const scrollToPosition = ref.offsetTop - topContainerHeight - 20;
      targetScrollRef.current = scrollToPosition;

      scrollContainer.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });
    } else {
      resetManualScrollFlag();
    }
  };

  // Intersection Observer回调函数（不使用）

  // 初始化滚动事件监听
  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
    return () => {
      window.clearInterval(timer);
    };
  }, []);

  // 初始化滚动事件监听
  useEffect(() => {
    // 添加滚动事件监听
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      const handleUserScrollInput = () => {
        if (isManualScrolling) {
          targetScrollRef.current = null;
          resetManualScrollFlag();
        }
      };
      scrollContainer.addEventListener("wheel", handleUserScrollInput, {
        passive: true,
      });
      scrollContainer.addEventListener("touchmove", handleUserScrollInput, {
        passive: true,
      });
      return () => {
        if (scrollContainer) {
          scrollContainer.removeEventListener("scroll", handleScroll);
          scrollContainer.removeEventListener("wheel", handleUserScrollInput);
          scrollContainer.removeEventListener(
            "touchmove",
            handleUserScrollInput
          );
        }
      };
    }
  }, [isManualScrolling]);

  // 不使用 IntersectionObserver

  return (
    <div className={styles.app}>
      <div ref={scrollContainerRef} className={styles.scrollContainer}>
        {/* 顶部容器，包含header和tabs */}
        <div
          ref={topContainerRef}
          className={`${styles.topContainer} ${isSticky ? styles.sticky : ""}`}
        >
          {/* 顶部横幅 */}
          <div className={styles.header}>
            <h1>Tabs滚动Demo</h1>
            <div className={styles.time}>{time}</div>
          </div>

          {/* Tabs */}
          <div className={styles.tabsContainer}>
            <Tabs
              activeKey={activeTab}
              onChange={handleTabChange}
              items={tabItems}
              centered
            />
          </div>
        </div>

        {/* 内容区域 */}
        <div className={styles.contentContainer}>
          {components.map(({ Component, key }, index) => (
            <div
              key={key}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              id={`section-${key}`}
              className={styles.sectionWrapper}
            >
              <Component className={styles.contentSection} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
