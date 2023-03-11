"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resizeRoute_1 = __importDefault(require("./api/resizeRoute"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    res.send('This is a Route');
});
routes.use('/resizedImage', resizeRoute_1.default);
routes.use('/', express_1.default.static('./images'));
exports.default = routes;
