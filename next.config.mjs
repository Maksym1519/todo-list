/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Включает статический экспорт для GitHub Pages
  trailingSlash: true, // Добавляет слеш в конец URL
  basePath: '/todo-list', // Имя вашего репозитория
  assetPrefix: '/todo-list/', // Для корректной загрузки ресурсов
};

export default nextConfig;