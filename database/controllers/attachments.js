const multer = require('multer')
const path = require('path')
const { Attachments, Searches } = require('../db')
const { BlobServiceClient } = require('@azure/storage-blob')

const blobService = BlobServiceClient.fromConnectionString(process.env.AZURE_STORAGE_CONNECTION_STRING)

const attachments = {}

async function create(url, search_id, offer_id, user_id) {
  const attachment = await Attachments.create({ url: url, search_id: search_id, offer_id: offer_id, user_id }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
  return attachment

}

async function findAllBySearch(search_id) {
  const attachment = await Attachments.findAll({
    where: { search_id: search_id },
    include: [{ model: Searches }]
  }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
  return attachment
}

async function findOneBySearch(search_id) {
  const attachment = await Attachments.findOne({
    where: { search_id: search_id },
    include: [{ model: Searches }]
  }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
  return attachment
}


const formatName = (originalname) => {
  const fileExtension = originalname.split('.').pop();
  const filteredName = originalname.replace(/^.*[\\\/]/, '').replace(/[\W_]+/g, '');
  return `${filteredName}.${fileExtension}`

}


const storage = multer.diskStorage({
  // destination: function (req, file, cb) {
  //   cb(null, path.join(__dirname, '../../public/attachments'));
  // },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + formatName(file.originalname));
  },
  buffer: function (req, file, cb) {
    cb(null, file.buffer);
  }

})

async function findOneByOffer(offer_id) {
  const attachment = await Attachments.findOne({
    where: { offer_id: offer_id },
    include: [{ model: Searches }]
  }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
  return attachment
}

// const upload = multer({ storage: storage })
const upload = multer()


const uploadToAzure = async (req, res) => {
  const { originalname, buffer } = req.file
  const blobName = Date.now() + '-' + formatName(originalname)
  const containerName = 'attachments'
  const containerClient = blobService.getContainerClient(containerName)
  const blockBlobClient = await containerClient.getBlockBlobClient(blobName).uploadData(buffer)
  const file = {name: blobName }

  res.json({ 'code': 1, 'data': file})

}

async function findOneByUser(user_id) {
  const attachment = await Attachments.findOne({
    where: { user_id: user_id },
    order: [['createdAt', 'DESC']],
    
  }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
  return attachment
}



attachments.upload = upload
attachments.create = create
attachments.findAllBySearch = findAllBySearch
attachments.findOneBySearch = findOneBySearch
attachments.findOneByOffer = findOneByOffer
attachments.uploadToAzure = uploadToAzure
attachments.findOneByUser = findOneByUser


module.exports = attachments




