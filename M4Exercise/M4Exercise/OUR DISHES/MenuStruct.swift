import Foundation
import CoreData

//let menuJSONString = """
//    [
//        {
//            "title": "Spinach Artichoke Dip",
//            "price": "10"
//        },
//        {
//            "title": "Hummus",
//            "price": "10"
//        },
//        {
//            "title": "Fried Calamari Rings",
//            "price": "51"
//        },
//        {
//            "title": "Fried Mushroom",
//            "price": "12"
//        },
//        {
//            "title": "Greek",
//            "price": "7"
//        },
//        {
//            "title": "Caesar",
//            "price": "7"
//        },
//        {
//            "title": "Mediterranean Tuna Salad",
//            "price": "10"
//        },
//        {
//            "title": "Grilled Chicken Salad",
//            "price": "12"
//        },
//        {
//            "title": "Water",
//            "price": "3"
//        },
//        {
//        "title": "Coke",
//            "price": "3"
//        },
//        {
//        "title": "Beer",
//        "price": "7"
//        },
//        {
//        "title": "Iced Tea",
//        "price": "3"
//        }
//    ]
//"""
//
//let menuData = Data(menuJSONString.utf8)
//let decoder = JSONDecoder()
//    var menuItems = try! decoder.decode([MenuItem].self, from: menuData)


struct JSONMenu: Codable {
    // add code here
    let menu: [MenuItem]
            enum CodingKeys: String, CodingKey {
            case menu = "menu"
        }
}


struct MenuItem: Codable, Hashable, Identifiable {
    // add code here
    let id = UUID()
    let title: String
    let price: Float
    enum CodingKeys: String, CodingKey {
            case title = "title"
            case price = "price"
    }
}
