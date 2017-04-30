//
//  RNDotEnv.m
//
//  Created by Vojtech Bartos on 28/04/17.
//  Copyright (c) 2017 vojtech.me. All rights reserved.
//

#import "RNDotEnv.h"

@implementation RNDotEnv

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(load:(NSString *)reference
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
    NSString *plistPath = [[NSBundle mainBundle] pathForResource:reference ofType:@"plist"];
    NSDictionary *env = [[NSDictionary alloc] initWithContentsOfFile:plistPath];

    if (plistPath) {
        resolve(env);
    }
    else {
        reject(@"no_ref", @"Environment file not found.", nil);
    }
}

- (NSDictionary *)constantsToExport
{
    NSString *plistPath = [[NSBundle mainBundle] pathForResource:@".env" ofType:@"plist"];
    NSDictionary *env = [[NSDictionary alloc] initWithContentsOfFile:plistPath];

    return env ?: @{};
}

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

@end
