import {  RegisterOptions } from "react-hook-form";
import { FormValues } from "../types";

export const formValidation: Record<keyof FormValues, RegisterOptions>= {
  brand: { required: true, },
    state: { required: true,  },
    country: { required: true, },
    deviceType: { required: true,},
    deviceNo: { required: true, maxLength: 100 },
    deviceName:{ required: true, maxLength: 100 },
    firstName: { required: true, maxLength: 100 },
    lastName: { required: true, maxLength: 100 },
    gender: { required: true, },
    nationality: { required: true,},
    address: { required: true, maxLength: 100 },
    mobileNo: { required: true, pattern:/^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[789]\d{9}$/ },
    idCard: { required: true,  },
    idNumber: { required: true,},
    contactPersonName:{ required: true, maxLength: 100 },
    contactPersonRelation: { required: true,  },
    contactPersonAddress: { required: true, maxLength: 100 },
    contactPersonMobileNo: { required: true, pattern:/^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[789]\d{9}$/ },
    reciverName: { required: true, maxLength: 100 },
    reciverAddress: { required: true, maxLength: 100 },
    dateOfDelivery: { required: true, },
    message: { required: true, maxLength: 300 },
    reciverMobileNo: { required: true,pattern:/^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[789]\d{9}$/  },
    agree: { required: true, },
    county:{ required: true, },
};

