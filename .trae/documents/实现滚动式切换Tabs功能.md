# 实现滚动式切换Tabs功能

## 功能需求
- 添加滚动事件监听，当用户滚动页面时自动切换到对应内容区域的Tab
- 当`isManualScrolling`为true时，不触发滚动式切换Tabs

## 实现思路
1. 添加滚动事件监听器到`scrollContainerRef`
2. 在滚动事件中，计算当前滚动位置对应的Tab
3. 如果`isManualScrolling`为false，则更新`activeTab`
4. 添加防抖处理，避免频繁触发

## 实现步骤
1. 在`useEffect`中添加滚动事件监听
2. 实现滚动事件处理函数`handleScroll`
3. 在`handleScroll`中计算当前可见的内容区域
4. 根据计算结果更新`activeTab`
5. 添加防抖处理
6. 确保在组件卸载时移除事件监听器

## 代码修改点
1. 在`useEffect`中添加滚动事件监听
2. 实现`handleScroll`函数
3. 添加防抖逻辑
4. 在组件卸载时移除事件监听器

## 预期效果
- 当用户滚动页面时，Tabs会自动切换到对应内容区域的Tab
- 当用户手动点击Tab进行滚动时，滚动过程中不会触发自动切换
- 滚动结束后，恢复自动切换功能