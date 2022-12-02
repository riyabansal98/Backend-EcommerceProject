

const CategoryController = require("../../../controllers/category.controller");
const Model = require("../../../models");
const CategoryModel = Model.category;
const newCategory = require("../../mock-data/new-category.json")
const {mockRequest, mockResponse} = require('../interceptor');

let req, res;

beforeEach(() => {

    req = mockRequest();     //req.body = {}
    res = mockResponse();
})

describe('CategoryController.create', () => {

    beforeEach( () => {
        req.body = newCategory
    })

    test('should call Category.Create and creates a new catrgory', async () => {

        //Mock model command
        const spy = jest.spyOn(CategoryModel, 'create')
        .mockImplementation((newCategory) => Promise.resolve(newCategory))

        await CategoryController.create(req, res)

        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalledWith(newCategory)
        expect(CategoryModel.create).toHaveBeenCalledWith(newCategory)
    });

    test('should call Category.create and ends with an error', async () => {

         //Mock model command
         const spy = jest.spyOn(CategoryModel, 'create')
         .mockImplementation((newCategory) => Promise.reject(Error("This is an error")))

         await CategoryController.create(req, res)

         expect(res.status).toHaveBeenCalledWith(500);
         expect(CategoryModel.create).toHaveBeenCalledWith(newCategory)
         expect(res.send).toHaveBeenCalledWith("Issue in creating the category")
    })
})