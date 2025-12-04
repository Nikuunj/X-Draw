
import { createClient } from "redis";
const client = createClient();
import { prismaClient } from '@repo/db/client'

async function processSubmission(submission: string) {
  // console.log(submission);
  const parseObj = JSON.parse(submission)
  try {
    await prismaClient.chatHistory.create({
      data: {
        userId: parseObj.userId,
        roomId: parseObj.roomId,
        message: parseObj.message
      }
    })

  } catch (e) {
  }
}

async function startWorker() {

  try {
    await client.connect();
    console.log("Worker connected to Redis.");

    // Main loop
    while (true) {
      try {
        const submission = await client.brPop("chatHistory", 0);

        if (!submission?.element) {
          return;
        }
        await processSubmission(submission.element);
      } catch (error) {
        console.error("Error processing submission:", error);
        // Implement your error handling logic here. For example, you might want to push
        // the submission back onto the queue or log the error to a file.
      }
    }
  } catch (error) {
    console.error("Failed to connect to Redis", error);
  }
}

startWorker();
