/**
 * Node Couchbase Driver
 * by OrfeasZ
 *
 * A Queue implementation in JavaScript for Node.js applications
 *
 * Based on code by Stephen Morley from http://code.stephenmorley.org/javascript/queues/
 *
 * @author Orfeas Zafeiris <i>orfeaz@gmail.com</i> (http://pointlimit.com)
 * @author Stephen Morley (http://code.stephenmorley.org/)
 */

/**
 * Creates a new Queue
 * @constructor
 */
var Queue = function()
{
    this.Items = [];
    this.Offset = 0;
};

/**
 * Returns whether the Queue is empty or not
 * @return {Boolean}
 */
Queue.prototype.IsEmpty = function()
{
    return this.Items.length == 0;
};

/**
 * Returns the size/length of the Queue
 * @return {Number} The size/length of the Queue
 */
Queue.prototype.Size = function()
{
    return this.Items.length - this.Offset;
};

/**
 * Adds a new item to the Queue
 * @param p_Item
 */
Queue.prototype.Add = function(p_Item)
{
    this.Items.push(p_Item);
};

/**
 * Dequeues an item from the Queue. Returns null if the Queue is empty.
 * @return {Object|null}
 */
Queue.prototype.Dequeue = function()
{
    if (this.Items.length == 0)
        return null;

    var s_DequeuedItem = this.Items[this.Offset];

    if (2 * (++this.Offset) >= this.Items.length)
    {
        this.Items = this.Items.slice(this.Offset);
        this.Offset = 0;
    }

    return s_DequeuedItem;
};

/**
 * Returns the item at the front of the Queue. Returns null if the Queue is empty.
 * @returns {Object|null}
 */
Queue.prototype.Front = function()
{
    return (this.Items.length > 0) ? this.Items[this.Offset] : null;
};

module.exports = Queue;