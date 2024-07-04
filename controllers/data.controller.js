import User from '../models/user.model.js';
export const editUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    console.log(user);

    if (!user) {
      return next(errorHandler(404, 'User not found'));
    }
    if (!req.user.isAdmin){
      return next(
        errorHandler(403, 'You are not allowed to edit this user')
      );
    }

    const x = await User.findById(req.params.userId);
    console.log("this is the value :",x);
    // const update= {content: req.body};
    console.log(req.body.location);
    const editedUser = await User.findByIdAndUpdate(
      req.params.userId,
      req.body,
      { new: true }
    );
    res.status(200).json(editedUser);
  } catch (error) {
    next(error);
  }
};
export const getUser = async (req, res, next) => { 
    res.status(200).json({"editedUser":"avdf"});
  };

