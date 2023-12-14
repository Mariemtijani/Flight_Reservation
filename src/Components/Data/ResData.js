import { v4 as uuid } from 'uuid';

const resData = [
  {
    "departCity": "New York",
    "returnCity": "Los Angeles",
    "departDetails": {
      "date": "20 Dec",
      "timeDepart": "08:30",
      "timeArrive": "12:45",
      "oldPrice": 220.00, // Replace price with oldPrice
      "newPrice": 180.00, // Add newPrice
      "seats": 4,
      "class": "economy"
    },
    "returnDetails": {
      "date": "26 Dec",
      "timeDepart": "15:30",
      "timeArrive": "19:45",
      "oldPrice": 200.00, // Replace price with oldPrice
      "newPrice": 160.00, // Add newPrice
      "seats": 3,
      "class": "premium economy"
    }
  },
  {
    "departCity": "London",
    "returnCity": "Paris",
    "departDetails": {
      "date": "22 Dec",
      "timeDepart": "14:15",
      "timeArrive": "17:30",
      "oldPrice": 170.00, // Replace price with oldPrice
      "newPrice": 150.00, // Add newPrice
      "seats": 3,
      "class": "business"
    },
    "returnDetails": {
      "date": "28 Dec",
      "timeDepart": "11:00",
      "timeArrive": "14:15",
      "oldPrice": 160.00, // Replace price with oldPrice
      "newPrice": 140.00, // Add newPrice
      "seats": 4,
      "class": "economy"
    }
  },
  {
    "departCity": "Tokyo",
    "returnCity": "Seoul",
    "departDetails": {
      "date": "25 Dec",
      "timeDepart": "10:00",
      "timeArrive": "13:30",
      "oldPrice": 280.00, // Replace price with oldPrice
      "newPrice": 250.00, // Add newPrice
      "seats": 5,
      "class": "premium economy"
    },
    "returnDetails": {
      "date": "31 Dec",
      "timeDepart": "14:45",
      "timeArrive": "18:00",
      "oldPrice": 260.00, // Replace price with oldPrice
      "newPrice": 230.00, // Add newPrice
      "seats": 2,
      "class": "business"
    }
  },
  {
    "departCity": "Sydney",
    "returnCity": "Auckland",
    "departDetails": {
      "date": "18 Dec",
      "timeDepart": "16:45",
      "timeArrive": "21:00",
      "oldPrice": 200.00, // Replace price with oldPrice
      "newPrice": 180.00, // Add newPrice
      "seats": 2,
      "class": "economy"
    },
    "returnDetails": {
      "date": "24 Dec",
      "timeDepart": "22:30",
      "timeArrive": "02:45",
      "oldPrice": 160.00, // Replace price with oldPrice
      "newPrice": 140.00, // Add newPrice
      "seats": 3,
      "class": "premium economy"
    }
  },
  {
    "departCity": "Berlin",
    "returnCity": "Rome",
    "departDetails": {
      "date": "23 Dec",
      "timeDepart": "12:00",
      "timeArrive": "15:30",
      "oldPrice": 220.00, // Replace price with oldPrice
      "newPrice": 200.00, // Add newPrice
      "seats": 4,
      "class": "business"
    },
    "returnDetails": {
      "date": "29 Dec",
      "timeDepart": "09:30",
      "timeArrive": "12:45",
      "oldPrice": 190.00, // Replace price with oldPrice
      "newPrice": 170.00, // Add newPrice
      "seats": 5,
      "class": "economy"
    }
  },
  {
    "departCity": "Cairo",
    "returnCity": "Dubai",
    "departDetails": {
      "date": "19 Dec",
      "timeDepart": "18:20",
      "timeArrive": "23:45",
      "oldPrice": 300.00, // Replace price with oldPrice
      "newPrice": 280.00, // Add newPrice
      "seats": 3,
      "class": "premium economy"
    },
    "returnDetails": {
      "date": "25 Dec",
      "timeDepart": "02:00",
      "timeArrive": "06:15",
      "oldPrice": 280.00, // Replace price with oldPrice
      "newPrice": 260.00, // Add newPrice
      "seats": 4,
      "class": "business"
    }
  },
  {
    "departCity": "São Paulo",
    "returnCity": "Rio de Janeiro",
    "departDetails": {
      "date": "21 Dec",
      "timeDepart": "09:45",
      "timeArrive": "13:00",
      "oldPrice": 220.00, // Replace price with oldPrice
      "newPrice": 200.00, // Add newPrice
      "seats": 2,
      "class": "economy"
    },
    "returnDetails": {
      "date": "27 Dec",
      "timeDepart": "14:30",
      "timeArrive": "17:45",
      "oldPrice": 200.00, // Replace price with oldPrice
      "newPrice": 180.00, // Add newPrice
      "seats": 5,
      "class": "business"
    }
  },
  {
    "departCity": "Moscow",
    "returnCity": "St. Petersburg",
    "departDetails": {
      "date": "24 Dec",
      "timeDepart": "15:30",
      "timeArrive": "18:45",
      "oldPrice": 250.00, // Replace price with oldPrice
      "newPrice": 210.00, // Add newPrice
      "seats": 5,
      "class": "premium economy"
    },
    "returnDetails": {
      "date": "30 Dec",
      "timeDepart": "19:00",
      "timeArrive": "22:15",
      "oldPrice": 230.00, // Replace price with oldPrice
      "newPrice": 190.00, // Add newPrice
      "seats": 2,
      "class": "economy"
    }
  },
  {
    "departCity": "Beijing",
    "returnCity": "Shanghai",
    "departDetails": {
      "date": "26 Dec",
      "timeDepart": "11:00",
      "timeArrive": "14:15",
      "oldPrice": 260.00, // Replace price with oldPrice
      "newPrice": 240.00, // Add newPrice
      "seats": 3,
      "class": "business"
    },
    "returnDetails": {
      "date": "01 Jan",
      "timeDepart": "16:30",
      "timeArrive": "19:45",
      "oldPrice": 240.00, // Replace price with oldPrice
      "newPrice": 220.00, // Add newPrice
      "seats": 4,
      "class": "economy"
    }
  },
  {
    "departCity": "Mumbai",
    "returnCity": "Delhi",
    "departDetails": {
      "date": "28 Dec",
      "timeDepart": "20:00",
      "timeArrive": "23:30",
      "oldPrice": 200.00, // Replace price with oldPrice
      "newPrice": 180.00, // Add newPrice
      "seats": 4,
      "class": "premium economy"
    },
    "returnDetails": {
      "date": "03 Jan",
      "timeDepart": "01:15",
      "timeArrive": "05:30",
      "oldPrice": 180.00, // Replace price with oldPrice
      "newPrice": 160.00, // Add newPrice
      "seats": 2,
      "class": "economy"
    }
  },
  {
    "departCity": "Toronto",
    "returnCity": "Vancouver",
    "departDetails": {
      "date": "27 Dec",
      "timeDepart": "13:45",
      "timeArrive": "17:00",
      "oldPrice": 240.00, // Replace price with oldPrice
      "newPrice": 220.00, // Add newPrice
      "seats": 2,
      "class": "business"
    },
    "returnDetails": {
      "date": "02 Jan",
      "timeDepart": "18:30",
      "timeArrive": "21:45",
      "oldPrice": 220.00, // Replace price with oldPrice
      "newPrice": 200.00, // Add newPrice
      "seats": 5,
      "class": "premium economy"
    }
  },
  {
    "departCity": "Istanbul",
    "returnCity": "Athens",
    "departDetails": {
      "date": "29 Dec",
      "timeDepart": "17:15",
      "timeArrive": "20:30",
      "oldPrice": 200.00, // Replace price with oldPrice
      "newPrice": 180.00, // Add newPrice
      "seats": 5,
      "class": "economy"
    },
    "returnDetails": {
      "date": "04 Jan",
      "timeDepart": "21:45",
      "timeArrive": "01:00",
      "oldPrice": 180.00, // Replace price with oldPrice
      "newPrice": 160.00, // Add newPrice
      "seats": 3,
      "class": "business"
    }
  }
];

export default resData;
