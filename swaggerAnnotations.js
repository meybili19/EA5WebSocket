/**
 * @swagger
 * /:
 *   get:
 *     summary: Serve the chat client
 *     description: Serves the HTML chat interface.
 *     responses:
 *       200:
 *         description: Returns the HTML chat interface.
 */

/**
 * @swagger
 * /websocket:
 *   post:
 *     summary: Send a message via WebSocket
 *     description: Clients can send messages via WebSocket which will be broadcasted to all connected clients.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Message'
 *     responses:
 *       200:
 *         description: Message sent successfully.
 *       500:
 *         description: Error occurred while processing the message.
 */
