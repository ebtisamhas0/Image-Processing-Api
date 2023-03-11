'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagePath = exports.ResizedImagePath = void 0;
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var validation_1 = __importDefault(require("../../middlewares/validation"));
var fs_1 = __importDefault(require("fs"));
var resizeRoute = (0, express_1.default)();
var ResizedImagePath = path_1.default.resolve('./') + '/editedImages';
exports.ResizedImagePath = ResizedImagePath;
var ImagePath = path_1.default.resolve('./') + '/images';
exports.ImagePath = ImagePath;
var images = ['green', 'natural', 'see'];
resizeRoute.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var imageName, heightStr, heightNum, widthStr, widthNum, imageName_1, height, width, resizedImage, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                imageName = req.query.image;
                heightStr = req.query.height;
                heightNum = parseInt(heightStr);
                widthStr = req.query.width;
                widthNum = parseInt(widthStr);
                //validation
                if (!imageName ||
                    (!images.includes(imageName) &&
                        (isNaN(heightNum) || heightNum <= 0 || !heightNum) &&
                        (widthNum || widthNum <= 0 || !widthNum))) {
                    return [2 /*return*/, res
                            .status(400)
                            .send('Please type the image name, height, and width')];
                }
                if ((isNaN(heightNum) || heightNum <= 0 || !heightNum) &&
                    (widthNum || widthNum <= 0 || !widthNum)) {
                    return [2 /*return*/, res
                            .status(400)
                            .send('Please type a valid height and width that is not less than 1')];
                }
                if (!imageName || !images.includes(imageName)) {
                    return [2 /*return*/, res.status(400).send('Please type the image name')];
                }
                if (isNaN(widthNum) || widthNum <= 0 || !widthNum) {
                    return [2 /*return*/, res
                            .status(400)
                            .send('Please type a valid width that is not less than 1')];
                }
                if (isNaN(heightNum) || heightNum <= 0 || !heightNum) {
                    return [2 /*return*/, res
                            .status(400)
                            .send('Please type a valid height that is not less than 1')];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                imageName_1 = req.query.image;
                height = parseInt(heightStr);
                width = parseInt(widthStr);
                resizedImage = "".concat(ResizedImagePath, "/").concat(imageName_1, "-").concat(width, "-").concat(height, ".jpg");
                if (fs_1.default.existsSync(resizedImage))
                    res.sendFile(resizedImage);
                console.log('image already exist');
                return [4 /*yield*/, (0, validation_1.default)(imageName_1, width, height)
                    // show resizedImage in browser
                ];
            case 2:
                _a.sent();
                // show resizedImage in browser
                try {
                    res.sendFile(resizedImage);
                    return [2 /*return*/];
                }
                catch (error) {
                    res.send(error);
                }
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                res.status(400);
                res.send(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.default = resizeRoute;
