"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPeople = void 0;
const axios_1 = __importDefault(require("axios"));
const coordUrl = 'https://bpdts-test-app-v4.herokuapp.com/users';
const cityUrl = 'https://bpdts-test-app-v4.herokuapp.com/city/London/users';
const getPeople = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let result = [];
    let coordList = yield getCoord();
    let cityList = yield getCity();
    result = result.concat(coordList, cityList);
    res.status(200).json(result);
});
exports.getPeople = getPeople;
const getCoord = () => __awaiter(void 0, void 0, void 0, function* () {
    let result = [];
    try {
        const people = yield axios_1.default.get(coordUrl);
        people.data.forEach(function (item, index) {
            if (item.latitude >= 50 && item.latitude <= 52 && item.longitude >= -1 && item.longitude <= 1) {
                result.push(item);
            }
        });
        return result;
    }
    catch (error) {
        throw error;
    }
});
const getCity = () => __awaiter(void 0, void 0, void 0, function* () {
    let result = [];
    try {
        const people = yield axios_1.default.get(cityUrl);
        people.data.forEach(function (item, index) {
            result.push(item);
        });
        return result;
    }
    catch (error) {
        throw error;
    }
});
