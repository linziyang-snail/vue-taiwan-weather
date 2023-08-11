module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], //配置 Tailwind 来移除生产环境下没有使用到的样式声明
	theme: {
		extend: {
			colors: {   // 设置默认的颜色
				'weather-primary': '#678F8D',
				'weather-secondary': '#004E71',
			},
			fontFamily: {  // 默认字体
				Roboto: ['Roboto, sans-serif'],
			},
			container: {  // 默认容器的属性
				padding: '2rem',
                center: true,
			},
			screens: {   // 屏幕断点设置
				sm: '640px',
				md: '768px',
			},
		},
	},
	plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    }
  ],
};
