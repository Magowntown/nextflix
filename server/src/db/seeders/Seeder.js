import { connection } from "../../boot.js";

import MediaSeeder from "./MediaSeeder.js"

class Seeder {
  static async seed() {
    console.log("seeding media...")
    await MediaSeeder.seed()

    console.log("done!")
    await connection.destroy();
  }
}

export default Seeder 