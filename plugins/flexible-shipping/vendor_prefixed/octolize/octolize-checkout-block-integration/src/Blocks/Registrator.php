<?php

namespace FSVendor\Octolize\Blocks;

use FSVendor\WPDesk\PluginBuilder\Plugin\Hookable;
class Registrator implements \FSVendor\WPDesk\PluginBuilder\Plugin\Hookable
{
    private string $integration_name;
    private string $plugin_dir;
    private string $plugin_file;
    private \FSVendor\Octolize\Blocks\IntegrationData $integration_data;
    public function __construct(\FSVendor\Octolize\Blocks\IntegrationData $integration_data, string $plugin_dir, string $plugin_file)
    {
        $this->integration_data = $integration_data;
        $this->integration_name = $integration_data->get_integration_name();
        $this->plugin_dir = $plugin_dir;
        $this->plugin_file = $plugin_file;
    }
    public function hooks()
    {
        \add_action('woocommerce_blocks_checkout_block_registration', function ($integration_registry) {
            $integration_registry->register(new \FSVendor\Octolize\Blocks\CheckoutIntegration($this->integration_data, $this->plugin_dir, $this->plugin_file));
        });
        \add_action('woocommerce_blocks_cart_block_registration', function ($integration_registry) {
            $integration_registry->register(new \FSVendor\Octolize\Blocks\CheckoutIntegration($this->integration_data, $this->plugin_dir, $this->plugin_file));
        });
    }
    protected function get_integration_name() : string
    {
        return $this->integration_name;
    }
    protected function get_plugin_dir() : string
    {
        return $this->plugin_dir;
    }
    protected function get_plugin_file() : string
    {
        return $this->plugin_file;
    }
    protected function get_integration_data() : \FSVendor\Octolize\Blocks\IntegrationData
    {
        return $this->integration_data;
    }
}
