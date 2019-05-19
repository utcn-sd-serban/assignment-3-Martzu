package com.example.assig1.service;


import com.example.assig1.model.User;
import com.example.assig1.persistence.api.RepositoryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
@RequiredArgsConstructor


public class StackUserDetailsService implements UserDetailsService
{
    private final RepositoryFactory repository;

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
    {
        User user = repository.createUserRepository().findByName(username)
                .orElseThrow(() -> new UsernameNotFoundException("Unknown user"));
        return new org.springframework.security.core.userdetails.User(user.getFullName(), user.getPassword(),
            Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER")));
    }
}
