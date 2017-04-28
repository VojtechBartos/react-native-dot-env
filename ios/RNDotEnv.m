//
//  RNDotEnv.m
//
//  Created by Vojtech Bartos on 28/04/17.
//  Copyright (c) 2017 vojtech.me. All rights reserved.
//

#import "RNDotEnv.h"

@implementation RNDotEnv

RCT_EXPORT_MODULE()



RCT_REMAP_METHOD(loadPlist:(NSString *)plistName,
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    NSString *plistPath = [[NSBundle mainBundle] pathForResource:plistName ofType:@"plist"];
    NSDictionary *env = [[NSDictionary alloc] initWithContentsOfFile:plistPath];

    resolve(env);


//    NSArray *events = ...
//    if (events) {
//        resolve(events);
//    } else {
//        NSError *error = ...
//        reject(@"no_events", @"There were no events", error);
//    }
}



- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

@end