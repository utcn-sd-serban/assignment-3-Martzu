package com.example.assig1.controller;


import com.example.assig1.command.CommandHandler;
import com.example.assig1.exception.UserNotFoundException;
import com.example.assig1.model.User;
import com.example.assig1.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class UserController
{
    private final CommandHandler handler;

    @GetMapping("/users")
    public List<User> readAll() throws ParseException {
        return handler.execute("getUsers", null);
    }

    @PostMapping("/users")
    public User create(@RequestBody User user) throws ParseException {

        return (User) handler.execute("addUser", user).get(0);
    }

    @PostMapping("/login")
    public void login(@RequestBody User user) throws ParseException {

        handler.execute("login", user);

    }

}
