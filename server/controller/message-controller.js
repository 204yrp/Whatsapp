import message from '../model/message.js';
import Conversation from '../model/Conversation.js';






export const newMessage =  async (request, response) => {

    
    try {
        const newMessage = new message(request.body);
        await newMessage.save();
        await Conversation.findByIdAndUpdate(request.body.conversationId, { message: request.body.text });
        return response.status(200).json("Message has been sent successfully");
    } catch (error) {
        return response.status(500).json(error);
    }
}

export const getMessages = async (request, response) => {
    try {
        const messages = await message.find({ conversationId: request.params.id });
        return response.status(200).json(messages);
    } catch (error) {
        return response.status(500).json(error.message);
    }

}