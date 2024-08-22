import { expect } from "chai";
import {
  checkUserTaskCompletion,
  isFanCodeCity,
} from "../src/services/getMethods.js";

describe("FanCode - Assignment", function () {
  this.timeout(10000); // Allow time for API requests

  context("Validation of User Task Completion", () => {
    it("should validate that all FanCode city users have > 50% task completion", async () => {
      const results = await checkUserTaskCompletion();
      results.forEach((result) => {
        expect(result.isCompleted).to.be.true;
      });
    });
  });

  context("Validation of City Coordinates", () => {
    it("should return true for coordinates within FanCode city bounds", () => {
      expect(isFanCodeCity(0, 50)).to.be.true;
      expect(isFanCodeCity(-30, 60)).to.be.true;
    });

    it("should return false for coordinates outside FanCode city bounds", () => {
      expect(isFanCodeCity(-50, 50)).to.be.false;
      expect(isFanCodeCity(10, 110)).to.be.false;
    });
  });
});
