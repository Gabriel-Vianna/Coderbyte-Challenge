const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("should return the event's partition key when it exists", () => {
    const event = { partitionKey: "testPartitionKey" };
    const result = deterministicPartitionKey(event);
    expect(result).toBe(event.partitionKey);
  });

  it("should return the hash of the event data when partition key is not provided", () => {
    const event = "testEvent";
    const dataHash = crypto
      .createHash("sha3-512")
      .update(JSON.stringify(event))
      .digest("hex");
    const result = deterministicPartitionKey(event);
    expect(result).toBe(dataHash);
  });

  it("Should reduce the length of candidate hash when its length is above 256, by hashing it again", () => {
    const longCandidate = "a".repeat(256 + 1);
    const hash = crypto
      .createHash("sha3-512")
      .update(longCandidate)
      .digest("hex");
    const result = deterministicPartitionKey({ partitionKey: longCandidate });
    expect(result).toBe(hash);
  });

  it("should convert the candidate to string if it is not already a string, when partitionKey is provided.", () => {
    const event = { partitionKey: 123 };
    const candidate = JSON.stringify(event.partitionKey);
    const result = deterministicPartitionKey(event);
    expect(result).toBe(candidate);
  });

  it("should convert the candidate to string if it is not already a string, when partitionKey is not provided", () => {
    const event = 123;
    const dataHash = crypto
      .createHash("sha3-512")
      .update(JSON.stringify(event))
      .digest("hex");
    const result = deterministicPartitionKey(event);
    expect(result).toBe(dataHash);
  });
});
