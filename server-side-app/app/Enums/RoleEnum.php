<?php

namespace App\Enums;

enum RoleEnum: string
{
    case ADMIN = 'Admin';
    case INFLUENCER = 'Influencer';
    case CLIENT = 'Client';
}
