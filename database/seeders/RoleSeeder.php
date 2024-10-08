<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $adminRole = Role::create(['name' => 'admin']);
        $userRole = Role::create(['name' => 'user']);

        $adminPermissionsList = ['create users', 'view users'];
        $adminPermissions = [];

        foreach ($adminPermissionsList as $permission) {
            $adminPermissions[] = Permission::create(['name' => $permission]);
        }

        $adminRole->syncPermissions($adminPermissions);
    }
}
