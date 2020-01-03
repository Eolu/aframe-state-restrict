/* global AFRAME */

if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.');
}

/**
 * A component which allows an entity to be limited to particular states.
 */
AFRAME.registerComponent('restrict-entity', 
{
    schema: 
    {
        states: {type: 'array', default: ['vr', 'non-vr']},
        pause: {type: 'boolean', default: true},
        hide: {type: 'boolean', default: true}
    },
    multiple: false,
    init: function () 
    {
        this.isEnabled = true;

        // Create a handler for state changes
        this.stateChanged = () =>
        {
            if (this.data.states.filter(state => this.el.is(state)).length)
            {
                if (!this.isEnabled)
                {
                    // Enable the entity
                    if (this.data.pause) this.el.play();
                    if (this.data.hide) this.el.object3D.visible = true;
                    this.isEnabled = true;
                }
            }
            else if (this.isEnabled)
            {
                // Disable the entity
                if (this.data.pause) this.el.pause();
                if (this.data.hide) this.el.object3D.visible = false;
                this.isEnabled = false;
            }
        }
    },
    update: function(oldData) 
    {
        this.stateChanged();
    },
    pause: function () 
    {  
        // Remove event listeners from the scen
        this.el.removeEventListener("stateadded", this.stateChanged);
        this.el.removeEventListener("stateremoved", this.stateChanged);
    },
    play: function () 
    {  
        // Add event listeners to the scene
        this.el.addEventListener("stateadded", this.stateChanged);
        this.el.addEventListener("stateremoved", this.stateChanged);
    }
});