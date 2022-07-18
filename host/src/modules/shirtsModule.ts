export const shirtsModule = {
  async getRoutes() {
    try {
      const routes = await import('shirts/ShirtsRoutes');
      return routes.default;
    } catch (error) {
      return [];
    }
  },
  async getMenus() {
    try {
      const routes = await import('shirts/ShirtsRoutes');
      return routes.default;
    } catch (error) {
      return [];
    }
  },
};
