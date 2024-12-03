import attendeeModel from '../model/attendee';

const createattendee = async (req, res) => {
    try {
      const { name, email, eventname } = req.body;
      console.log(req.body);
   
      const attendee = new attendeeModel({
       name, email, eventname
      });
      if (attendee) {
        return res.status(400).json({ message: "fields required" });
      }
      const savedAttende = await newAttende.save();
  
      return res.status(201).json(savedAttende);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

  export default createattendee;
