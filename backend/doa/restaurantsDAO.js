let restaurents;

export default class RestaurantsDAO {
  static async injectDB(conn) {
    if (restaurents) {
      return;
    }
    try {
      restaurants = await conn
        .db(process.env.RESTREVIEWS_NS)
        .collection("restaurants");
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in restaurantsDAO: ${e} `
      );
    }
  }
}
