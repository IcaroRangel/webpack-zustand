export const pantsModule = {
  async getRoutes() {
    try {
      const routes = await import('pants/PantsRoutes');
      return routes.default;
    } catch (error) {
      return [];
    }
  },
  async getMenus() {
    try {
      const routes = await import('pants/PantsMenu');
      return routes.default;
    } catch (error) {
      return [];
    }
  },
};
