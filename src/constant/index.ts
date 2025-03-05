export const Options = [
  {
    name: "TechCorp",
    state: [
      {
        name: "California",
        country: "USA",
      },
      {
        name: "Texas",
        country: "USA",
      },
      {
        name: "New York",
        country: "USA",
      },
    ],
  },
  {
    name: "AutoMotiveX",
    state: [
      {
        name: "Bavaria",
        country: "Germany",
      },
      {
        name: "Ontario",
        country: "Canada",
      },
      {
        name: "Quebec",
        country: "Canada",
      },
    ],
  },
  {
    name: "FoodiesHub",
    state: [
      {
        name: "Maharashtra",
        country: "India",
      },
      {
        name: "New South Wales",
        country: "Australia",
      },
      {
        name: "Victoria",
        country: "Australia",
      },
    ],
  },
  {
    name: "GadgetWorld",
    state: [
      {
        name: "Tokyo",
        country: "Japan",
      },
      {
        name: "Osaka",
        country: "Japan",
      },
      {
        name: "Hokkaido",
        country: "Japan",
      },
    ],
  },
];

export const deviceTypes = [
  { label: "Smartphone", value: "smartphone" },
  { label: "Laptop", value: "laptop" },
  { label: "Tablet", value: "tablet" },
  { label: "Desktop", value: "desktop" },
  { label: "Smartwatch", value: "smartwatch" },
  { label: "Gaming Console", value: "gaming_console" },
  { label: "Smart TV", value: "smart_tv" },
  { label: "Wearable", value: "wearable" },
  { label: "IoT Device", value: "iot_device" },
  { label: "Printer", value: "printer" },
];

export const brandOption = [
  {
    brandName: "Nike",
    brandID: "NK001",
    displayName: "Nike Sports",
    id: "550e8400-e29b-41d4-a716-446655440000",
  },
  {
    brandName: "Adidas",
    brandID: "AD002",
    displayName: "Adidas Originals",
    id: "550e8400-e29b-41d4-a716-446655440001",
  },
  {
    brandName: "Puma",
    brandID: "PM003",
    displayName: "Puma Active",
    id: "550e8400-e29b-41d4-a716-446655440002",
  },
 
];

export const countryOption = [
  {
    brandName: "Nike",
    brandID: "NK001",
    id: "550e8400-e29b-41d4-a716-446655440000",
    country: "USA",
    regionId: "US01",
    name: "Nike Sport Shoes",
  },
  {
    brandName: "Adidas",
    brandID: "AD002",
    id: "550e8400-e29b-41d4-a716-446655440001",
    country: "Germany",
    regionId: "DE02",
    name: "Adidas Running Shoes",
  },

  {
    brandName: "Nike",
    brandID: "NK001",
    id: "550e8400-e29b-41d4-a716-446655440003",
    country: "China",
    regionId: "US04",
    name: "Nike Basketball Shoes",
  },
 
  {
    brandName: "Nike",
    brandID: "NK001",
    id: "550e8400-e29b-41d4-a716-446655440006",
    country: "Canada",
    regionId: "US9",
    name: "Nike Yoga Pants",
  },
  {
    brandName: "Adidas",
    brandID: "AD002",
    displayName: "Adidas Originals",
    id: "550e8400-e29b-41d4-a716-446655440007",
    country: "Denmark",
    regionId: "DE12",
    name: "Adidas Training Shorts",
  },

  {
    brandName: "Nike",
    brandID: "NK001",
    displayName: "Nike Sports",
    id: "550e8400-e29b-41d4-a716-446655440009",
    country: "Korea",
    regionId: "US59",
    name: "Nike Football Boots",
  },
  {
    brandName: "Adidas",
    brandID: "AD002",
    displayName: "Adidas Originals",
    id: "550e8400-e29b-41d4-a716-446655440010",
    country: "North Africa",
    regionId: "DE53",
    name: "Adidas Sneakers",
  },
  {
    brandName: "Puma",
    brandID: "PM003",
    displayName: "Puma Active",
    id: "550e8400-e29b-41d4-a716-446655440011",
    country: "Jimbabe",
    regionId: "DE37",
    name: "Puma Running Shoes",
  },
];



export const stateOption = [
  {
    regionId: "US01",
    shortCode: "USA",
    name: "USA",
    stateId: "ST01", // Simple stateId format
    id: "550e8400-e29b-41d4-a716-446655440000", // UUID format for state id
  },
  {
    regionId: "DE02",
    shortCode: "DE",
    name: "Germany",
    stateId: "ST02", // Simple stateId format
    id: "550e8400-e29b-41d4-a716-446655440001", // UUID format for state id
  },

  {
    regionId: "US01",
    shortCode: "USA",
    name: "NEPAL",
    stateId: "US59", // Simple stateId format
    id: "550e8400-e29b-41d4-a716-446655440003", // UUID format for state id
  },

  {
    regionId: "US01",
    shortCode: "USA",
    name: "AMERICA",
    stateId: "US59", // Simple stateId format
    id: "550e8400-e29b-41d4-a716-446655440006", // UUID format for state id
  },
  {
    regionId: "DE53",
    shortCode: "DE",
    name: "Germany",
    stateId: "ST08", // Simple stateId format
    id: "550e8400-e29b-41d4-a716-446655440007", // UUID format for state id
  },
  
];

export const countyOption = [
  {
    stateId: "ST01", // Simple stateId format
    displayName: "Los Angeles",
    id: "550e8400-e29b-41d4-a716-446655440100", // UUID format for county id
  },
  {
    stateId: "US01", // Simple stateId format
    displayName: "Berlin",
    id: "550e8400-e29b-41d4-a716-446655440101", // UUID format for county id
  },
  {
    stateId: "ST03", // Simple stateId format
    displayName: "Munich",
    id: "550e8400-e29b-41d4-a716-446655440102", // UUID format for county id
  },
  {
    stateId: "US01", // Simple stateId format
    displayName: "San Francisco",
    id: "550e8400-e29b-41d4-a716-446655440103", // UUID format for county id
  },
  {
    stateId: "ST05", // Simple stateId format
    displayName: "Hamburg",
    id: "550e8400-e29b-41d4-a716-446655440104", // UUID format for county id
  },
  {
    stateId: "US01", // Simple stateId format
    displayName: "Frankfurt",
    id: "550e8400-e29b-41d4-a716-446655440105", // UUID format for county id
  },
  {
    stateId: "ST07", // Simple stateId format
    displayName: "New York City",
    id: "550e8400-e29b-41d4-a716-446655440106", // UUID format for county id
  },
  {
    stateId: "US01", // Simple stateId format
    displayName: "Munich",
    id: "550e8400-e29b-41d4-a716-446655440107", // UUID format for county id
  },
  {
    stateId: "ST09", // Simple stateId format
    displayName: "Stuttgart",
    id: "550e8400-e29b-41d4-a716-446655440108", // UUID format for county id
  },
  {
    stateId: "US01", // Simple stateId format
    displayName: "Chicago",
    id: "550e8400-e29b-41d4-a716-446655440109", // UUID format for county id
  },
  {
    stateId: "ST11", // Simple stateId format
    displayName: "Cologne",
    id: "550e8400-e29b-41d4-a716-446655440110", // UUID format for county id
  },
  {
    stateId: "US01", // Simple stateId format
    displayName: "Dusseldorf",
    id: "550e8400-e29b-41d4-a716-446655440111", // UUID format for county id
  },
];
