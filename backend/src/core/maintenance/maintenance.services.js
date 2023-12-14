const {getAllMaintController, createNewMaint, patchMaintController, delMaintController} = require('./maintenance.controllers')


const getAllMaintHandler = async(req, res) => {
    const getAllMaint = await getAllMaintController();
    if(getAllMaint){
      res.status(200).json(getAllMaint);
    }else{
      res.status(404).json({message:"Maintenance not found"});
    }
};

const postMaintHandler = async(req, res) =>{
  try {
      const {user_id,title, description, status} = req.body;
      const newMaint = await createNewMaint(user_id, title, description, status);
      res.status(201).json({newMaint});
  } catch (error) {
      res.status(400).json({error: error.message})
  }

}


const updateMaintHandler = async (req, res) =>{
    const {id} = req.params;
    const newData = req.body;
   try {
      const updateMaint = await patchMaintController(id, newData)
      res.status(200).json(updateMaint)
   } catch (error) {
    res.status(400).json({error:error.message})
   }
}

const deleteMaintHandler = async(req, res) =>{
  const {id} = req.params;
  try {
    const delMaint = await delMaintController(id);
    res.status(200).json(delMaint)
  } catch (error) {
    res.status(400).json({error:error.message})
   }
}

module.exports = {getAllMaintHandler, postMaintHandler, updateMaintHandler, deleteMaintHandler}
