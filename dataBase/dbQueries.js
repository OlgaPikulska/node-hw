import { ContactModel } from "../schemas/contactsSchema.js";
import { UserModel } from "../schemas/usersSchema.js";

export const listContacts = async () => {
    const data = await ContactModel.find();
    return data;
}

export const getContactById = async (contactId) => {
    const data = await ContactModel.findById(contactId);
    return data;
}

export const addNewContact = async (body) => {
    const newContact = await ContactModel.create(body);
    return newContact;
}

export const removeContact = async (contactId) => {
    const result = await ContactModel.findByIdAndRemove({ _id: contactId });
    return result;
}

export const updateContact = async (contactId, body) => {
    const updatedContact = await ContactModel.findByIdAndUpdate(
        { _id: contactId },
        { ...body },
        { new: true }
    )
    return updatedContact;
}

export const getUserById = async (userId) => {
    const data = await UserModel.findById(userId);
    return data;
}

export const addNewUser = async (body) => {
    const newUser = await UserModel.create(body);
    return newUser;
}

export const getUserByMail = async (email) => {
    const foundUser = await UserModel.findOne({ email })
    return foundUser;
}

export const updateToken = async (userId, token) => {
    const updatedUser = await UserModel.updateOne({ _id: userId }, { token });
    return updatedUser
}

export const updateAvatar = async (userId, avatarURL) => {
    const userWithNewAvatar = await UserModel.findByIdAndUpdate(userId, { avatarURL }, { new: true });
    return userWithNewAvatar
}

export const findEmailToken = async (verificationToken) => {
    const userFoundByToken = UserModel.find({ verificationToken }, { _id: 1, verify: 1 });
    return userFoundByToken
}

export const confirmEmail = async (id) => {
    const foundUser = UserModel.findByIdAndUpdate(id, { verify: true }, { new: true });
    return foundUser
}

export const findByEmail = async (email) => {
    const foundUser = UserModel.find({ email }, { verify: 1, verificationToken: 1 });
    return foundUser
}

export const isUserInDB = async (email) => UserModel.exists({ email: email })