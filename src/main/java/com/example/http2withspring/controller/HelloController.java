package com.example.http2withspring.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/hello")
public class HelloController {
    @GetMapping
    public ResponseEntity<Map<String, String>> sayHello(@RequestParam(required = false, name =
            "suffix",
            defaultValue = "No name") String suffix) {
        return ResponseEntity.ok(Map.of("result", String.format("Hello %s", suffix)));
    }

    @GetMapping("random-quote")
    public ResponseEntity<Map<String, String>> giveOutQuote() {
        return ResponseEntity.ok(Map.of("result","Practice makes man perfect"));
    }
}
