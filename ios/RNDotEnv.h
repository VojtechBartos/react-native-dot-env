//
//  RNDotEnv.h
//
//  Created by Vojtech Bartos on 28/04/17.
//  Copyright (c) 2017 vojtech.me. All rights reserved.
//

#if __has_include("RCTBridgeModule.h")
#import "RCTBridgeModule.h"
#else
#import <React/RCTBridgeModule.h>
#endif

@interface RNDotEnv : NSObject <RCTBridgeModule>

@end
